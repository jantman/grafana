// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     TSTypesJenny
//     PluginTSTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

import * as ui from '@grafana/schema';

export const PanelModelVersion = Object.freeze([0, 0]);

export interface PanelOptions extends ui.SingleStatBaseOptions {
  displayMode: ui.BarGaugeDisplayMode;
  minVizHeight: number;
  minVizWidth: number;
  showUnfilled: boolean;
  valueMode: ui.BarGaugeValueMode;
}

export const defaultPanelOptions: Partial<PanelOptions> = {
  displayMode: ui.BarGaugeDisplayMode.Gradient,
  minVizHeight: 10,
  minVizWidth: 0,
  showUnfilled: true,
  valueMode: ui.BarGaugeValueMode.Color,
};
