-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2018 at 03:14 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laradox`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_types`
--

CREATE TABLE `account_types` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account_types`
--

INSERT INTO `account_types` (`id`, `name`) VALUES
(1, 'User'),
(2, 'Team');

-- --------------------------------------------------------

--
-- Table structure for table `fields`
--

CREATE TABLE `fields` (
  `id` int(11) NOT NULL,
  `uuid` varchar(100) DEFAULT NULL,
  `type` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `length` int(11) DEFAULT NULL,
  `decimal` int(11) DEFAULT NULL,
  `enum` text,
  `attrib_increment` tinyint(1) DEFAULT NULL,
  `attrib_unsigned` tinyint(1) DEFAULT NULL,
  `attrib_primary` tinyint(1) DEFAULT NULL,
  `attrib_index` tinyint(1) DEFAULT NULL,
  `attrib_nullable` tinyint(1) DEFAULT NULL,
  `attrib_unique` tinyint(1) DEFAULT NULL,
  `attrib_fillable` tinyint(1) DEFAULT NULL,
  `attrib_guarded` tinyint(1) DEFAULT NULL,
  `attrib_visible` tinyint(1) DEFAULT NULL,
  `attrib_hidden` tinyint(1) DEFAULT NULL,
  `attrib_foreign` tinyint(1) DEFAULT NULL,
  `attrib_foreign_field_id` int(11) DEFAULT NULL,
  `attrib_foreign_on_delete` varchar(20) DEFAULT NULL,
  `attrib_foreign_on_update` varchar(20) DEFAULT NULL,
  `table_id` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fields`
--

INSERT INTO `fields` (`id`, `uuid`, `type`, `name`, `length`, `decimal`, `enum`, `attrib_increment`, `attrib_unsigned`, `attrib_primary`, `attrib_index`, `attrib_nullable`, `attrib_unique`, `attrib_fillable`, `attrib_guarded`, `attrib_visible`, `attrib_hidden`, `attrib_foreign`, `attrib_foreign_field_id`, `attrib_foreign_on_delete`, `attrib_foreign_on_update`, `table_id`, `order`, `created_at`, `updated_at`, `deleted_at`) VALUES
(2, '4a9e7f50-3df2-11e7-a870-35be5076ac62', 'bigIncrements', 'id', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 19, 1, '2017-05-21 06:54:10', '2017-05-21 06:54:10', NULL),
(3, '59768a00-3df2-11e7-90ea-c169833bdf55', 'char', 'name', 100, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 19, 2, '2017-05-21 06:54:35', '2017-05-21 06:54:35', NULL),
(4, 'b778c370-3df2-11e7-b45d-db829c7e1745', 'char', 'namae', 100, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 19, 3, '2017-05-21 06:57:12', '2017-05-21 06:57:12', NULL),
(5, '6c2c1290-407c-11e7-93c1-d175fadc0c74', 'bigIncrements', 'id', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 20, 1, '2017-05-24 12:27:59', '2018-01-28 16:07:30', NULL),
(6, 'fa4c07a0-407c-11e7-a1fd-85994329132f', 'char', 'name', 30, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 20, 2, '2017-05-24 12:31:57', '2017-05-24 12:31:57', NULL),
(7, 'ed7117e0-4790-11e7-8e76-c3d6962f6a47', 'char', 'kambing', 255, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 20, 3, '2017-06-02 12:42:24', '2017-06-02 12:42:24', NULL),
(8, 'f7a2eac0-4791-11e7-a6b9-cf0a20187269', 'bigInteger', 'role_id', 255, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 20, 4, '2017-06-02 12:49:50', '2017-06-02 12:49:50', NULL),
(9, '6d045460-4c59-11e7-bb68-bf3b9a26f469', 'bigInteger', 'hakmasa', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 20, 5, '2017-06-08 14:47:42', '2017-06-08 14:47:42', NULL),
(10, '6d1daeb0-4c59-11e7-b0fb-d173f53cf1b9', 'bigInteger', 'hakmasa', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 20, 6, '2017-06-08 14:47:42', '2017-06-08 14:47:42', NULL),
(11, 'f58323c0-4c5c-11e7-819a-67bec5e14112', 'bigIncrements', 'id', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 21, 1, '2017-06-08 15:12:59', '2018-01-29 15:23:01', NULL),
(12, '19c2a9b0-4c5d-11e7-bace-ddeec7a6fb80', 'bigInteger', 'user_id', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 21, 2, '2017-06-08 15:14:00', '2018-01-29 15:23:01', NULL),
(13, '236af520-0440-11e8-ab69-0bc6f8139aff', 'bigInteger', 'indexnya', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 21, 3, '2018-01-28 15:30:15', '2018-01-28 15:30:15', NULL),
(14, 'f12fea20-0443-11e8-be98-d7b0d7b3e2f6', 'bigIncrements', 'ideeee', NULL, NULL, '[null]', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, NULL, 20, 7, '2018-01-28 15:57:29', '2018-01-28 15:57:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `relations`
--

CREATE TABLE `relations` (
  `id` int(11) DEFAULT NULL,
  `source_field_id` int(11) DEFAULT NULL,
  `target_field_id` int(11) DEFAULT NULL,
  `on_update` varchar(20) DEFAULT NULL,
  `on_delete` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `schemas`
--

CREATE TABLE `schemas` (
  `id` int(11) NOT NULL,
  `uuid` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schemas`
--

INSERT INTO `schemas` (`id`, `uuid`, `name`, `user_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '5d29a1a0-32e2-11e7-988b-1b2e5125a1bc', 'User', 5, '2017-05-07 05:02:26', '2017-05-07 05:02:26', NULL),
(2, '91c2d400-37bb-11e7-97b6-f5b0660bd331', 'Elevator', 5, '2017-05-13 09:07:20', '2017-05-13 09:07:20', NULL),
(3, '9c4226f0-37bb-11e7-931a-8f22779f250c', 'Tangga Naik', 5, '2017-05-13 09:07:37', '2017-05-13 09:07:37', NULL),
(4, '308bcc20-043e-11e8-95cc-5334763d1aaf', 'Schemadeh', 5, '2018-01-28 15:16:18', '2018-01-28 15:16:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `uuid` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `model_name` varchar(100) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `top_position` int(11) DEFAULT NULL,
  `left_position` int(11) DEFAULT NULL,
  `schema_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`id`, `uuid`, `name`, `model_name`, `color`, `top_position`, `left_position`, `schema_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(20, '27297920-407c-11e7-b715-6f0d0871df83', 'users', 'User', 'laradox', 100, 50, 1, '2017-05-24 12:26:03', '2018-01-30 14:05:00', NULL),
(21, 'e9ef6930-4c5c-11e7-b4aa-d7aa1ad572f0', 'identities', 'Identity', 'aqua', 117, 431, 1, '2017-06-08 15:12:40', '2018-01-30 14:05:00', NULL),
(22, '80eb7640-043e-11e8-ab30-633ac8d153e7', 'Haksaweb', 'App', 'laradox', 100, 10, 4, '2018-01-28 15:18:33', '2018-01-28 15:18:33', NULL),
(23, '8e1048a0-043e-11e8-8e66-f1bd30d5a5d4', 'Mantap', 'App', 'laradox', 146, 339, 4, '2018-01-28 15:18:55', '2018-01-28 15:20:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `account_type` int(11) DEFAULT '1',
  `remember_token` varchar(255) DEFAULT NULL,
  `api_token` varchar(60) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT '0',
  `email_token` varchar(15) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `account_type`, `remember_token`, `api_token`, `confirmed`, `email_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, 'Franky So', NULL, 'frankyso.mail@gmail.com', '$2y$10$.6Omt270en3jiGOuf4ZuieEmCybaiwIrMHpcWI.lXb4gnYy9G7Ydi', 1, 'nyuw6wscc5he7s2pUSZDn5e5zPc30IjI9orNhMAVdlUfzblMGJ0Rg6FpJNgj', 'iJrLbgTDtMojwU10P92dPpkkm7I4fncRvwKShg00juMmHvLyfWi5gaIMaaWq', 0, '3H6p0m2CcWDlv2v', '2017-04-30 14:26:51', '2017-04-30 14:26:51', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE `user_accounts` (
  `user_id` int(11) DEFAULT NULL,
  `accont_d` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_types`
--
ALTER TABLE `account_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fields`
--
ALTER TABLE `fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schemas`
--
ALTER TABLE `schemas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_types`
--
ALTER TABLE `account_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `fields`
--
ALTER TABLE `fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `schemas`
--
ALTER TABLE `schemas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
