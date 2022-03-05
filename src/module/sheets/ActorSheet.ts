import { CampaignData, NpcData } from '../templates/ActorTemplates';

/**
 * @extends {ActorSheet}
 */
export class AlActorSheet extends ActorSheet {
  static override get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['avatarlegends', 'sheet', 'actor'],
      width: 600,
      height: 600,
      tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'features' }],
    });
  }

  override get template(): string {
    const actorTemplatesPath = 'systems/AvatarLegendsVTT/templates/actor';
    return `${actorTemplatesPath}/${this.actor.data.type}.html`;
  }
}

/**
 * @extends {AlActorSheet}
 */
export class AlCampaignSheet extends AlActorSheet {
  override activateListeners(html: JQuery<HTMLElement>): void {
    super.activateListeners(html);

    html.find('.actor-edit').on('click', (ev) => {
      const li = $(ev.currentTarget).parents('.actor');
      const npcId = li.attr('id');
      if (npcId) {
        const actor = (game as Game).actors?.get(npcId);
        actor?.sheet?.render(true);
      }
    });

    this.UpdateContent();

    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

    html.find('.actor-delete').on('click', (ev) => {
      const li = $(ev.currentTarget).parents('.actor');
      const npcId = li.attr('id');
      if (npcId) {
        const data = this.actor.data.data as CampaignData;
        const index = data.npcs.indexOf(npcId, 0);
        if (index > -1) {
          data.npcs.splice(index, 1);
        }
        this.actor.update({ 'data.npcs': data.npcs });
        this.render(false);
      }
    });
  }

  protected _onDrop(event: DragEvent): void {
    const dataStr = event.dataTransfer?.getData('text/plain');
    if (dataStr) {
      const data: { type: string; id: string } = JSON.parse(dataStr);
      const id = data.id;
      if (id && data.type === 'Actor') {
        const actor = (game as Game).actors?.get(id);
        if (actor?.type === 'npc') {
          const actorData = this.actor.data;
          const campaignData = actorData.data as CampaignData;
          if (!campaignData.npcs.includes(id)) {
            campaignData.npcs.push(id);
            this.actor.update({ 'data.npcs': campaignData.npcs });
            this.render(false);
            return;
          }
        }
      }
    }

    super._onDrop(event);
  }

  /**
   * Refreshes the content inside the Campaign Sheet with derived data from the template
   */
  UpdateContent(): void {
    const html = this.element;
    if (html) {
      const data = this.actor.data.data as CampaignData;
      for (let i = 0; i < data.npcs.length; ++i) {
        const npcId = data.npcs[i];
        const actorData = (game as Game).actors?.get(npcId)?.data;
        const npcRow = $(html).find('.' + npcId);
        const nameField = $(npcRow).find('.npc-name');
        const relField = $(npcRow).find('.npc-rel');

        if (actorData) {
          $(nameField).text(actorData.name);
        } else {
          // "Unknown"
          $(nameField).text((game as Game).i18n.localize('AKVTT.Common.Unknown'));
        }
        const npcData = actorData?.data as NpcData | undefined;
        if (npcData?.relationship) {
          $(relField).text(npcData.relationship);
        } else {
          // "Unknown"
          $(relField).text((game as Game).i18n.localize('AKVTT.Common.Unknown'));
        }
      }
    }
  }
}
