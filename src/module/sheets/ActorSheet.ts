import { CampaignData, NpcData } from '../templates/ActorTemplates';

/**
 * todo : docs
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
 * todo : docs
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

    // console.log('activateListeners');
  }

  /**
   * Refreshes the content inside the Campaign
   */
  UpdateContent(): void {
    const html = this.element;
    if (html) {
      const data = this.actor.data.data as CampaignData;
      for (let i = 0; i < data.npcs.length; ++i) {
        const npcId = data.npcs[i];
        const actorData = (game as Game).actors?.get(npcId)?.data;
        if (actorData) {
          const npcRow = $(html).find('.' + npcId);
          const nameField = $(npcRow).find('.npc-name');
          $(nameField).text(actorData.name);

          const npcData = actorData.data as NpcData;
          const relField = $(npcRow).find('.npc-rel');
          if (npcData.relationship) {
            $(relField).text(npcData.relationship);
          } else {
            $(relField).text('n/a');
          }
        }
      }
    }
  }
}
