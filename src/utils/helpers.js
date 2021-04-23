import React from 'react';
import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';

import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = 'Flashcard:notifications';
const CHANNEL_ID = 'Reminder';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: 'Mobile Flashcards Reminder',
    body: "👋 Don't forget to study for today!",
    ios: {
      sound: true,
    },
    android: {
      channelId: CHANNEL_ID,
      sticky: false,
      color: 'red',
    },
  };
}

function createChannel() {
  return {
    name: 'Daily Reminder',
    description: 'This is a daily reminder for you to study your flashcards.',
    sound: true,
    priority: 'high',
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.createChannelAndroidAsync(CHANNEL_ID, createChannel())
              .then((val) => console.log('channel return:', val))
              .then(() => {
                Notifications.cancelAllScheduledNotificationsAsync();

                const tomorrow = new Date();

                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(3);
                tomorrow.setMinutes(30);

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                );

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              })
              .catch((err) => {
                console.log('err', err);
              });
          }
        });
      }
    });
}

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
