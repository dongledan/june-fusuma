'use strict'

const db = require('../server/db')
const {User, Item, Order, OrderItem} = require('../server/db/models')

const users = [
  {email: 'cody@email.com', password: '123', isAdmin: true},
  {email: 'murphy@email.com', password: '123'}
]

const items = [
  {
    season: '2020',
    name: 'LITTLE PRODIGY L/S',
    imageUrl: 'https://i.ibb.co/9gWpRgH/ljb.png',
    price: '45.00',
    quantity: 5,
    description:
      'It takes 10,000 hours to become an expert. Have you been putting in the work? Chances are, some little asian boy is already better than you.'
  },
  {
    season: '2020',
    name: 'BOB ROSS PAINTS JUN TEE',
    imageUrl: 'https://i.imgur.com/LAGuAUC.png',
    price: '25.00',
    quantity: 5,
    description:
      'This was all a mistake but at least it is a happy mistake. A tree here, and tree there and we got ourselves a painting.'
  },
  {
    season: '2020',
    name: 'BOB ROSS PAINTS JUN TEE',
    imageUrl: 'https://i.imgur.com/SZxruki.png',
    price: '25.00',
    quantity: 5,
    description:
      'This was all a mistake but at least it is a happy mistake. A tree here, and tree there and we got ourselves a painting.'
  },
  {
    season: '2020',
    name: 'BOB ROSS PAINTS JUN TEE',
    imageUrl: 'https://i.imgur.com/jYmZUUJ.png',
    price: '25.00',
    quantity: 5,
    description:
      'This was all a mistake but at least it is a happy mistake. A tree here, and tree there and we got ourselves a painting.'
  },
  {
    season: '2020',
    name: 'BOB ROSS PAINTS JUN TEE',
    imageUrl: 'https://i.imgur.com/P4bSjuf.png',
    price: '25.00',
    quantity: 5,
    description:
      'This was all a mistake but at least it is a happy mistake. A tree here, and tree there and we got ourselves a painting.'
  },
  {
    season: '2020',
    name: 'BORN ALONE TEE',
    imageUrl: 'https://i.imgur.com/th8WEPv.png',
    price: '25.00',
    quantity: 5,
    description: '6 oz 100% ring spun cotton'
  },
  {
    season: '2020',
    name: 'BORN ALONE TEE',
    imageUrl: 'https://i.imgur.com/kYhAEnG.png',
    price: '25.00',
    quantity: 5,
    description: '6 oz 100% ring spun cotton'
  },
  {
    season: '2020',
    name: 'BORN ALONE TEE',
    imageUrl: 'https://i.imgur.com/hBlIJzy.png',
    price: '25.00',
    quantity: 5,
    description: '6 oz 100% ring spun cotton'
  },
  {
    season: '2020',
    name: 'BORN ALONE TEE',
    imageUrl: 'https://i.imgur.com/PP2Cjbf.png',
    price: '25.00',
    quantity: 5,
    description: '6 oz 100% ring spun cotton'
  },
  {
    season: '2019',
    name: 'JUNFUSUMA TEE',
    imageUrl: 'https://i.imgur.com/MHmboii.png',
    price: '25.00',
    quantity: 5,
    description: '6 oz 100% ring spun cotton'
  },
  {
    season: '2019',
    name: 'GREEN IS THE NEW BLACK BELT',
    imageUrl: 'https://i.ibb.co/rymzcM1/Screen-Shot-2020-08-12-at-23-49-37.png',
    price: '30.00',
    quantity: 1,
    description:
      'Brown belt? No thanks. I am not ready. Let me dwell among the green belts. Ow my shoulder! Not again.'
  },
  {
    season: '2019',
    name: 'IMMINENT THREAT L/S',
    imageUrl: 'https://i.imgur.com/dPkC7rh.png',
    price: '45.00',
    quantity: 1,
    description: 'Run.'
  },
  {
    season: '2018',
    name: 'WHITE TEE',
    imageUrl: 'https://i.ibb.co/mDYFHNs/Screen-Shot-2020-08-12-at-22-09-18.png',
    price: '25.00',
    quantity: 5,
    description:
      'This is so much more than a shirt. It is a white t-shirt. What do you want, it is a t-shirt.'
  },
  {
    season: '2018',
    name: `"YOU GOOD BRO?" L/S`,
    imageUrl: 'https://i.imgur.com/ZTWcUEy.png',
    price: '35.00',
    quantity: 5,
    description: `Tell me... Tell me that I can outdrink you. The narrator: "He could not."`
  },
  {
    season: '2018',
    name: `"YOU GOOD BRO?" L/S`,
    imageUrl: 'https://i.imgur.com/XnnkfoI.png',
    price: '35.00',
    quantity: 5,
    description: `Tell me... Tell me that I can outdrink you. The narrator: "He could not."`
  },
  {
    season: '2018',
    name: `"YOU GOOD BRO?" L/S`,
    imageUrl: 'https://i.imgur.com/vGIscow.png',
    price: '35.00',
    quantity: 5,
    description: `Tell me... Tell me that I can outdrink you. The narrator: "He could not."`
  },
  {
    season: '2018',
    name: 'USED CHUKKAS',
    imageUrl: 'https://i.imgur.com/9aihmr6.png',
    price: '135.00',
    quantity: 2,
    description:
      'Jun wore these everyday since he was born. You have the opportunity to get these size 8 boots. 1 boot per order.'
  }
]

const orders = [
  {
    isPurchased: true,
    userId: 1
  },
  {
    isPurchased: false,
    userId: 1
  },
  {
    isPurchased: true,
    userId: 2
  },
  {
    isPurchased: false,
    userId: 2
  }
]

const orderItems = [
  {
    orderId: 1,
    itemId: 1,
    price: '10',
    quantity: 1
  },
  {
    orderId: 2,
    itemId: 1,
    price: '10',
    quantity: 1
  },
  {
    orderId: 3,
    itemId: 1,
    price: '10',
    quantity: 1
  },
  {
    orderId: 4,
    itemId: 1,
    price: '10',
    quantity: 1
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${users.length} users`)

  await Promise.all(items.map(item => Item.create(item)))
  console.log(`seeded ${items.length} items`)

  await Promise.all(orders.map(order => Order.create(order)))
  console.log(`seeded ${orders.length} orders`)

  await Promise.all(orderItems.map(orderItem => OrderItem.create(orderItem)))
  console.log(`seeded ${orderItems.length} orderItems`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
