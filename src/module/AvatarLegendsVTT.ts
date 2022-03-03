/**
 * Main entrypoint for the AvatarLegends system for Foundry Virtual Tabletop
 * Author: Matthew Bennett
 * Software License: MIT
 */

// Import TypeScript modules
import { RegisterSettings } from './AlSettings';
import { PreloadTemplates } from './AlTemplates';
import { AlCampaignSheet } from './sheets/ActorSheet';
import { AlActor } from './documents/AlActor';

declare global {
  interface LenientGlobalVariableTypes {
    AvatarLegends: object;
  }
}

// Initialize system
Hooks.once('init', async () => {
  console.log('AvatarLegendsVTT | Initializing AvatarLegends');

  // Assign custom classes and constants here
  (game as LenientGlobalVariableTypes).AvatarLegends = {
    AlActor,
  };

  CONFIG.Actor.documentClass = AlActor;

  // Register custom system settings
  RegisterSettings();

  // Preload Handlebars templates
  await PreloadTemplates();

  // Register custom sheets
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('AvatarLegends', AlCampaignSheet, { types: ['campaign'], makeDefault: true });
});

// Setup system
Hooks.once('setup', async () => {
  // Do anything after initialization but before
  // ready
});

// When ready
Hooks.once('ready', async () => {
  // Do anything once the system is ready
});

// Add any additional hooks if necessary
