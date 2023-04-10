use store;
CREATE TABLE sellers (
    user_id int auto_increment primary key,
    name varchar (20),
    gender varchar (2),
    zip_code varchar (5) not null,
    address varchar (200) not null,
    state varchar (50),
    city varchar (50),
    phone varchar (20) unique
);
CREATE TABLE clients (
    client_id integer not null primary key,
    name varchar (100),
    lastname varchar (100),
    email varchar (255) unique,
    phone varchar (20) unique,
    birthday DATE,
    code_postal varchar (5)
);
CREATE TABLE city (
    city_id integer not null,
    name text not null,
    branch text not null,
    CONSTRAINT pkey_city primary key (city_id)
);
CREATE TABLE products (
    product_id integer auto_increment primary key,
    name varchar (100) not null,
    price float not null
    type varchar (100) not null,
    code_brand,
    name_brand,
    description varchar (300),
    code_location integer
);
CREATE TABLE branches (
    branch_id integer not null primary key,
    branch_name varchar (100),
    address varchar (100),
    amount integer not null,
    admission_date datetime not null,
    departure_date datetime not null
);
CREATE TABLE storages (
    storage_id integer not null primary key,
    product_id integer,
    amount integer not null,
    admission_date datetime not null,
    departure_date datetime not null
);
CREATE TABLE orders (
    order_id int auto_increment primary key,
    date date,
    price integer not null,
    units integer not null,
    city_id_fk integer not null,
    client_id_fk integer not null,
    seller_id_fk integer not null,
    product_id_fk integer not null,
    branch_id_fk integer not null,
    storage_id integer not null,

    CONSTRAINT fk_client foreign key (client_id_fk) references clients(client_id),
    CONSTRAINT fk_city foreign key (city_id_fk) references city(city_id),
    CONSTRAINT fk_user foreign key (seller_id_fk) references sellers(user_id),
    CONSTRAINT fk_product foreign key (product_id_fk) references products(product_id)
);