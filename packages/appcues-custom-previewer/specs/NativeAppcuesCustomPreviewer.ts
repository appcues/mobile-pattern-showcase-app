import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  preview(
    accountID: string,
    applicationID: string,
    experienceID: string,
    localeID: string
  ): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AppcuesCustomPreviewer');
