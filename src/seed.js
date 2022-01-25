export function seedDatabase(firebase) {
  const users = [
    {
      userId: 'aVmQEKG7S0QyK8P4KNuZe4CnT8j1',
      username: 'sidd',
      fullName: 'Siddharth Sahoo',
      emailAddress: 'siddsahoo@gmail.com',
      following: ['2'],
      followers: ['2', '3', '4'],
      dateCreated: Date.now()
    },
    {
      userId: '2',
      username: 'raphael',
      fullName: 'Raffaello Sanzio da Urbino',
      emailAddress: 'raphael@sanzio.com',
      following: [],
      followers: ['aVmQEKG7S0QyK8P4KNuZe4CnT8j1'],
      dateCreated: Date.now()
    },
    {
      userId: '3',
      username: 'dali',
      fullName: 'Salvador Dalí',
      emailAddress: 'salvador@dali.com',
      following: [],
      followers: ['aVmQEKG7S0QyK8P4KNuZe4CnT8j1'],
      dateCreated: Date.now()
    },
    {
      userId: '4',
      username: 'orwell',
      fullName: 'George Orwell',
      emailAddress: 'george@orwell.com',
      following: [],
      followers: ['aVmQEKG7S0QyK8P4KNuZe4CnT8j1'],
      dateCreated: Date.now()
    }
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection('users').add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: '2',
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: 'Saint George and the Dragon',
        likes: [],
        comments: [
          {
            displayName: 'dali',
            comment: 'Love this place, looks like my animal farm!'
          },
          {
            displayName: 'orwell',
            comment: 'Would you mind if I used this picture?'
          }
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}
