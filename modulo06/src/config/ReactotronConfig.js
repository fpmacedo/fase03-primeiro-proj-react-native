import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}

// no cmd caso nao apareca a conexao no reactotron utilizar o comando
// 'adb reverse tcp:9090 tcp:9090' to forward port
// 'adb reverse --list' to ensure it's there
