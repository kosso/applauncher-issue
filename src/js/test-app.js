import { AppLauncher } from '@capacitor/app-launcher';

const test = 'This is a sample app to demonstrate the app-launcher plugin issue';

function main(){

    document.getElementById('test').innerText = test;

    AppLauncher.canOpenUrl({ url: 'twitter://timeline' }).then(data => {
            console.log('AppLauncher : Is Twitter/X installed? ', data.value);
            document.getElementById('test-twitter').innerText = 'Is Twitter/X app installed? : ' + data.value;

    });

    AppLauncher.canOpenUrl({ url: 'fb://feed' }).then(data => {
            console.log('AppLauncher : Is Facebook installed? ', data.value);
            document.getElementById('test-facebook').innerText = 'Is Facebook app installed? : ' + data.value;

    });

}

main();