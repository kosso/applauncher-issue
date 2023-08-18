// Test 'Utils' plugin to try a different method for testing if an app is installed

import { registerPlugin } from '@capacitor/core';

export interface UtilsPlugin {
    // demo test
    echo(options: { value: string }): Promise<{ value: string }>;

    // Existing method used in app-launcher
    canOpenURL(options: { url: string }): Promise<{ value: boolean}>;

    // Test method derived from varius sources
    canOpenURTest(options: { url: string }): Promise<{ value: boolean}>;

}

const Utils = registerPlugin<UtilsPlugin>('Utils');

export default Utils;
