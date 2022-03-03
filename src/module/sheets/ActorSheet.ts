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

    console.log('activateListeners');
  }
}
