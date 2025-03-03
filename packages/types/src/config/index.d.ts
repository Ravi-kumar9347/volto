import type { SettingsConfig } from './Settings';
import type { BlocksConfig } from './Blocks';
import type { ViewsConfig } from './Views';
import type { WidgetsConfig } from './Widgets';

export type AddonReducersConfig = Record<string, Function>;

export type AddonRoutesConfig = {
  path: string;
  exact: boolean;
  component: React.ComponentType;
}[];

export type SlotsConfig = Record<string, unknown>;

export type ComponentsConfig = Record<
  string,
  { component: React.ComponentType }
>;

export type ExperimentalConfig = Record<string, unknown>;

export type ConfigData = {
  settings: SettingsConfig;
  blocks: BlocksConfig;
  views: ViewsConfig;
  widgets: WidgetsConfig;
  addonReducers: AddonReducersConfig;
  addonRoutes: AddonRoutesConfig;
  slots: SlotsConfig;
  components: ComponentsConfig;
  experimental: ExperimentalConfig;
};

export { SettingsConfig, BlocksConfig, ViewsConfig, WidgetsConfig };
