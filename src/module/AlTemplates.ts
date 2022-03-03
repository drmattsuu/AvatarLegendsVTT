export async function PreloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/AvatarLegendsVTT/templates"
    'systems/AvatarLegendsVTT/templates/actor/campaign.html',
    'systems/AvatarLegendsVTT/templates/actor/npc.html',
    'systems/AvatarLegendsVTT/templates/actor/player.html',
  ];

  return loadTemplates(templatePaths);
}
