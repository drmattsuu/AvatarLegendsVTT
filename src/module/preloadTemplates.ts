export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/AvatarLegendsVTT/templates"
  ];

  return loadTemplates(templatePaths);
}
