/**
 * todo : docs
 * @extends {ActorSheet}
 */
export class AlActorSheet extends ActorSheet {
  override get template(): string {
    const actorTemplatesPath = 'systems/AvatarLegendsVTT/templates/actor';
    return `${actorTemplatesPath}/${this.actor.data.type}.html`;
  }
}

/**
 * todo : docs
 * @extends {AlActorSheet}
 */
export class AlCampaignSheet extends AlActorSheet {}
