const prisma = require("./prisma.js");
const categories = require("../data/categories.json");
const discounts = require("../data/discounts.json");
const favorite = require("../data/favorislists.json");
const gamekeys = require("../data/gamekeys.json");
const games = require("../data/games.json");
const notifications = require("../data/notifications.json");
const orderitems = require("../data/orderitems.json");
const orders = require("../data/orders.json");
const review = require("../data/review.json");
const shoppingcarts = require("../data/shoppingcarts.json");
const subscription = require("../data/subscriptions.json");
const transactions = require("../data/transactions.json");
const user = require("../data/user.json");
const userprofiles = require("../data/userprofiles.json");
const wishlist = require("../data/wishlist.json");

const seed = async () => {
  await prisma.User.createMany({ data: user, skipDuplicates: true }).then(
    (response) => {
      console.log("users seeded  ", response);
    }
  );
  await prisma.Game.createMany({ data: games, skipDuplicates: true }).then(
    (response) => {
      console.log("games seeded  ", response);
    }
  );
  await prisma.Order.createMany({ data: orders, skipDuplicates: true }).then(
    (response) => {
      console.log(" orders seeded  ", response);
    }
  );
  await prisma.orderItems
    .createMany({ data: orderitems, skipDuplicates: true })
    .then((response) => {
      console.log("OrderItems seeded  ", response);
    });
  await prisma.FavorisList.createMany({
    data: favorite,
    skipDuplicates: true,
  }).then((response) => {
    console.log("favorisList seeded  ", response);
  });
  await prisma.Review.createMany({ data: review, skipDuplicates: true }).then(
    (response) => {
      console.log("Reviews seeded  ", response);
    }
  );
  await prisma.category
    .createMany({ data: categories, skipDuplicates: true })
    .then((response) => {
      console.log("categories seeded  ", response);
    });
  await prisma.wishlist
    .createMany({ data: wishlist, skipDuplicates: true })
    .then((response) => {
      console.log("wishlist seeded  ", response);
    });
  await prisma.shoppingCart
    .createMany({ data: shoppingcarts, skipDuplicates: true })
    .then((response) => {
      console.log("shoppingCarts seeded  ", response);
    });
  await prisma.Transaction.createMany({
    data: transactions,
    skipDuplicates: true,
  }).then((response) => {
    console.log("Transactions seeded  ", response);
  });
  await prisma.GameKey.createMany({
    data: gamekeys,
    skipDuplicates: true,
  }).then((response) => {
    console.log("gamekeys seeded  ", response);
  });
  await prisma.UserProfile.createMany({
    data: userprofiles,
    skipDuplicates: true,
  }).then((response) => {
    console.log("userprofiles seeded  ", response);
  });
  await prisma.Notification.createMany({
    data: notifications,
    skipDuplicates: true,
  }).then((response) => {
    console.log("Notification seeded  ", response);
  });
  await prisma.Subscription.createMany({
    data: subscription,
    skipDuplicates: true,
  }).then((response) => {
    console.log("Subscriptions seeded  ", response);
  });
  await prisma.Discount.createMany({
    data: discounts,
    skipDuplicates: true,
  }).then((response) => {
    console.log("discounts  seeded  ", response);
  });

  console.log("data seeded MoNFA5 HAL LOULAD");
  await prisma.$disconnect();
};

seed().catch((error) => {
  console.error("Error seeding database:", error);
});
