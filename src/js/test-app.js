import { AppLauncher } from '@capacitor/app-launcher';

import Utils from './utils-plugin';


const test = 'This is a sample app to demonstrate the app-launcher plugin issue';

function main() {

        document.getElementById('test').innerText = test;

        // Tests using app-launcher plugin 
        AppLauncher.canOpenUrl({ url: 'twitter://timeline' }).then(data => {
                console.log('AppLauncher : Is Twitter/X installed? ', data.value);
                const _el = document.getElementById('test-twitter');
                _el.innerText = 'Is Twitter/X app installed? : ' + data.value;
                if(data.value){
                        _el.classList.add('ok');
                }

        });

        AppLauncher.canOpenUrl({ url: 'fb://feed' }).then(data => {
                console.log('AppLauncher : Is Facebook installed? ', data.value);
                const _el = document.getElementById('test-facebook');
                _el.innerText = 'Is Facebook app installed? : ' + data.value;
                if(data.value){
                       _el.classList.add('ok');
                }
        });

        AppLauncher.canOpenUrl({ url: 'https://google.com' }).then(data => {
                console.log('AppLauncher : Can open google.com? ', data.value);
                const _el = document.getElementById('test-https');
                _el.innerText = 'Can open https://google.com? : ' + data.value;
                if(data.value){
                        _el.classList.add('ok');
                }

        });

        // Tests using custom Utils plugin. See js/utils-plugin.ts for interface  

        Utils.canOpenURLTest({ url: 'twitter://timeline' }).then(data => {
                console.log('Utils plugin canOpenURLTest() : Is Twitter/X installed? ', data.value);
                const _el = document.getElementById('test-utils-twitter');

                _el.innerText = 'Is Twitter/X app installed? : ' + data.value;
                if(data.value){
                        _el.classList.add('ok');
                }

        });

        Utils.canOpenURLTest({ url: 'fb://feed' }).then(data => {
                console.log('Utils plugin canOpenURLTest() : Is Facebook installed? ', data.value);
                const _el = document.getElementById('test-utils-facebook');
                _el.innerText = 'Is Facebook app installed? : ' + data.value;
                if(data.value){
                        _el.classList.add('ok');
                }
        });


        Utils.canOpenURLTest({ url: 'https://google.com' }).then(data => {
                console.log('Utils plugin canOpenURLTest() : Can open google.com? ', data.value);
                const _el = document.getElementById('test-utils-https');
                _el.innerText = 'Can open https://google.com? : ' + data.value;
                if(data.value){
                        _el.classList.add('ok');
                }
        });


}

main();