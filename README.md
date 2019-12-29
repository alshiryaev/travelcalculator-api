This is api services for Travelcalculator

We use postgres and sequelize-types for working with data
To a local work you will need to do the following 

1. Create .env file in the root folder (next to src folder)
2. Create in the .env file variables for login and password for your local database ADMIN_LOGIN=your_login and ADMIN_PASSWORD=your_password.
3. Create in the .env file a variable for database connection by url DATABASE_URL=postgres://username:password@localhost:5432/travelcalculator
3. You need an exist and empty database 'travelcalulator'
3. Run 'npx sequelize-cli db:migrate' for creating tables
4. Optional. Run 'npx sequelize-cli db:seed:all' for get data 
 