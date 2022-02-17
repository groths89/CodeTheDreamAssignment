# CodeTheDream Assignment
## Basic App for Keeping Track of an Inventory

This app follows a microfrontend architecture. The assignment was to create an application in React and/or Ruby On Rails (ROR) that has a main function of keeping track of an item in an inventory.

### Main Required Features

- Keep track of at least one product. Let’s start with bananas
- Manage the quantities of the product(s). There should be a way to increase and decrease the number of items of the product(s) in the inventory
- Send an email if the quantity of a product hits zero

### Setting up Application Locally

1. First things first open a terminal window (I use bash)

2. Next, clone my repo to your computer locally:

```git clone git@github.com:groths89/CodeTheDreamAssignment.git```

or

```git clone https://github.com/groths89/CodeTheDreamAssignment.git```

3. Next, go into that directory just cloned:

```cd CodeTheDreamAssignment```

4. Next, go to the container application directory:

```cd packages/container```

5. Next, run the container application:

```npm run start```

6. Next, open another terminal window leaving the other one open

7. Next, go to the inventory application directory:

```cd CodeTheDreamAssignment/packages/inventory```

8. Next, run the inventory application:

```npm run start```

9. Finally, open up your web browser and type into the address bar:

Container Applicaion: ```http://localhost:8080```

Inventory Application: ```http://localhost:8081```

___ You can run the Invetory application in isolation and skip steps 4 and 5 ___


### Additional Information


