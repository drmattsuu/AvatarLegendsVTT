export async function PreloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    'systems/AvatarLegendsVTT/templates/actor/parts/campaign.html',
    'systems/AvatarLegendsVTT/templates/actor/parts/npcs.html',

    'systems/AvatarLegendsVTT/templates/actor/campaign.html',
  ];

  return loadTemplates(templatePaths);
}
