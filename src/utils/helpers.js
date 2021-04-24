import * as Notifications from 'expo-notifications';
import { AsyncStorage } from 'react-native';
const NOTIFICATION_KEY = 'Flashcard:notifications';
const CHANNEL_ID = 'DailyReminder';

export const scorePercentage = (correct, count) => {
  return Math.floor((correct / count) * 100);
};

export const changeSize = (length) => {
  if (length <= 50) {
    return 32;
  }

  if (length >= 50 && length <= 150) {
    return 28;
  }

  if (length >= 150 && length <= 250) {
    return 22;
  }

  if (length >= 250 && length <= 350) {
    return 18;
  }
};

const setObjectValue = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(NOTIFICATION_KEY, jsonValue);
  } catch (e) {
    console.log('There was an error setting notification key: ', e);
  }

  console.log('Done.');
};

//notifications

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}
function createNotification() {
  return {
    title: 'Quiz reminder 📚 ',
    body: "📝 Don't forget to memorize your cards today!",
    vibrate: [1000, 2000, 3000],
    priority: 'high',
  };
}
async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowSound: true,
      allowBadge: true,
      provideAppNotificationSettings: true,
      allowAnnouncements: true,
    },
  });
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      requestPermissionsAsync().then((response) => {
        if (response.status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync();
          Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: true,
              shouldSetBadge: false,
            }),
          });

          Notifications.scheduleNotificationAsync({
            content: createNotification(),
            trigger: {
              hour: 12,
              minute: 0,
              repeats: true,
            },
          });
          setObjectValue(true);
        }
      });
    });
}
