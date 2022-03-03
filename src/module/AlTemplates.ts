export async function PreloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/AvatarLegendsVTT/templates"
    'systems/AvatarLegendsVTT/templates/actor/campaign.html',
  ];

  return loadTemplates(templatePaths);
}
