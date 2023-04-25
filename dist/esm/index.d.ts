import SafeAreaController from './controller';
import type { SafeAreaPlugin, SafeAreaHTMLProps } from './definitions';
declare const SafeArea: SafeAreaPlugin;
declare const controller: SafeAreaController;
export * from './definitions';
export { SafeArea };
export { controller as SafeAreaController };
declare global {
    export namespace JSX {
        interface IntrinsicElements {
            'safe-area': SafeAreaHTMLProps;
        }
    }
}
