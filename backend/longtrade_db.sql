-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20251118.dfcf3dd949
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 08, 2025 at 07:02 AM
-- Server version: 8.4.3
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `longtrade_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `log_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_id` bigint UNSIGNED DEFAULT NULL,
  `event` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `causer_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `causer_id` bigint UNSIGNED DEFAULT NULL,
  `properties` json DEFAULT NULL,
  `batch_uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `api_settings`
--

CREATE TABLE `api_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `is_encrypted` tinyint(1) NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `api_settings`
--

INSERT INTO `api_settings` (`id`, `category`, `key`, `name`, `value`, `description`, `is_encrypted`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'google', 'google_analytics_id', 'Google Analytics 4 Measurement ID', '', 'GA4 Measurement ID (G-XXXXXXXXXX)', 0, 1, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(2, 'google', 'google_search_console_verification', 'Google Search Console Verification Code', '', 'Meta tag verification code', 0, 1, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(3, 'google', 'google_recaptcha_site_key', 'Google reCAPTCHA Site Key', '', 'reCAPTCHA v3 Site Key', 0, 1, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(4, 'google', 'google_recaptcha_secret_key', 'Google reCAPTCHA Secret Key', '', 'reCAPTCHA v3 Secret Key', 1, 1, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(5, 'google', 'google_adsense_client_id', 'Google AdSense Client ID', '', 'AdSense Client ID (ca-pub-XXXXXXXXXXXXXXXX)', 0, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(6, 'social', 'line_channel_id', 'LINE Channel ID', '', 'LINE Login Channel ID', 0, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(7, 'social', 'line_channel_secret', 'LINE Channel Secret', '', 'LINE Login Channel Secret', 1, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(8, 'social', 'facebook_app_id', 'Facebook App ID', '', 'Facebook OAuth App ID', 0, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(9, 'social', 'facebook_app_secret', 'Facebook App Secret', '', 'Facebook OAuth App Secret', 1, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(10, 'social', 'google_client_id', 'Google OAuth Client ID', '', 'Google OAuth 2.0 Client ID', 0, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(11, 'social', 'google_client_secret', 'Google OAuth Client Secret', '', 'Google OAuth 2.0 Client Secret', 1, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(12, 'ai', 'openai_api_key', 'OpenAI API Key', '', 'ChatGPT API Key', 1, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(13, 'ai', 'openai_model', 'OpenAI Model', 'gpt-4', 'ChatGPT Model (gpt-3.5-turbo, gpt-4, gpt-4-turbo)', 0, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(14, 'ai', 'openai_max_tokens', 'Max Tokens per Request', '2000', 'Maximum tokens for ChatGPT responses', 0, 0, '2025-11-24 18:56:09', '2025-11-24 18:56:09');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `focus_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `og_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `og_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `og_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_card` enum('summary','summary_large_image') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'summary_large_image',
  `twitter_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `twitter_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `canonical_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schema_type` enum('Article','BlogPosting','NewsArticle','TechArticle') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Article',
  `schema_data` json DEFAULT NULL,
  `seo_score` int NOT NULL DEFAULT '0',
  `excerpt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `featured_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `read_time` int DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `published_at` timestamp NULL DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `tags` json DEFAULT NULL,
  `views_count` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `slug`, `title`, `meta_title`, `meta_description`, `meta_keywords`, `focus_keyword`, `og_title`, `og_description`, `og_image`, `twitter_card`, `twitter_title`, `twitter_description`, `twitter_image`, `canonical_url`, `schema_type`, `schema_data`, `seo_score`, `excerpt`, `content`, `featured_image`, `author`, `read_time`, `is_published`, `is_featured`, `published_at`, `category_id`, `tags`, `views_count`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '5-forex-trading-strategies-for-beginners', '5 กลยุทธ์การเทรด Forex สำหรับมือใหม่', '5 กลยุทธ์การเทรด Forex สำหรับมือใหม่ | LongTrade', 'เรียนรู้ 5 กลยุทธ์การเทรด Forex ที่เหมาะสำหรับผู้เริ่มต้น ตั้งแต่ Trend Following, Support & Resistance, Breakout, Range Trading และ News Trading', 'forex, trading strategy, forex for beginners, technical analysis, forex tips', 'กลยุทธ์การเทรด Forex', NULL, NULL, NULL, 'summary_large_image', NULL, NULL, NULL, NULL, 'Article', NULL, 65, 'เรียนรู้กลยุทธ์การเทรด Forex ที่เหมาะสำหรับผู้เริ่มต้น พร้อมเทคนิคการบริหารความเสี่ยงที่มีประสิทธิภาพ', '<h2>บทนำ</h2><p>การเทรด Forex เป็นหนึ่งในตลาดการเงินที่ใหญ่ที่สุดในโลก ด้วยปริมาณการซื้อขายมากกว่า 6 ล้านล้านดอลลาร์ต่อวัน สำหรับมือใหม่ การเริ่มต้นอาจดูน่ากลัว แต่ด้วยกลยุทธ์ที่ถูกต้อง คุณสามารถเพิ่มโอกาสในการประสบความสำเร็จได้</p><h2>1. กลยุทธ์ Trend Following</h2><p>การติดตามแนวโน้มเป็นหนึ่งในกลยุทธ์ที่ได้รับความนิยมมากที่สุด หลักการคือการซื้อขายไปตามทิศทางของแนวโน้มหลัก ใช้ Moving Average เพื่อระบุทิศทาง</p><h2>2. Support และ Resistance Trading</h2><p>การเทรดโดยใช้แนวรับและแนวต้านเป็นวิธีที่มีประสิทธิภาพ เทรดเดอร์มองหาจุดที่ราคามักจะกลับตัว</p><h2>3. Breakout Strategy</h2><p>กลยุทธ์การเทรดเมื่อราคาทะลุแนวรับหรือแนวต้านที่สำคัญ มักจะมีการเคลื่อนไหวที่รุนแรง</p><h2>4. Range Trading</h2><p>เหมาะสำหรับตลาดที่เคลื่อนไหวในกรอบ ซื้อที่แนวรับและขายที่แนวต้าน</p><h2>5. News Trading</h2><p>การเทรดตามข่าวเศรษฐกิจที่สำคัญ ต้องมีความรวดเร็วและการบริหารความเสี่ยงที่ดี</p><h2>สรุป</h2><p>ทุกกลยุทธ์มีข้อดีและข้อเสีย สิ่งสำคัญคือการทดสอบและปรับให้เหมาะกับสไตล์การเทรดของคุณ อย่าลืมใช้ Stop Loss และบริหารความเสี่ยงอย่างเหมาะสม</p>', 'articles/forex-strategies.jpg', 'LongTrade Team', 8, 1, 1, '2025-11-25 19:05:39', 1, '\"[\\\"Forex\\\",\\\"Trading Strategy\\\",\\\"Beginner\\\",\\\"Technical Analysis\\\"]\"', 12, '2025-11-25 19:05:39', '2025-11-30 04:54:27', NULL),
(2, 'understanding-candlestick-patterns-pro-guide', 'เข้าใจ Candlestick Patterns ฉบับมือโปร', 'เข้าใจ Candlestick Patterns ฉบับมือโปร | คู่มือครบวงจร', 'เรียนรู้การอ่านและวิเคราะห์ Candlestick Patterns แบบมืออาชีพ ครอบคลุม Bullish, Bearish และ Continuation Patterns พร้อมเทคนิคการใช้งานจริง', 'candlestick patterns, japanese candlestick, technical analysis, chart patterns, trading signals', 'Candlestick Patterns', NULL, NULL, NULL, 'summary_large_image', NULL, NULL, NULL, NULL, 'Article', NULL, 70, 'คู่มือครบวงจรสำหรับการอ่านและวิเคราะห์ Candlestick Patterns ที่เทรดเดอร์มืออาชีพใช้ในการตัดสินใจเทรด', '<h2>Candlestick คืออะไร?</h2><p>Candlestick หรือแท่งเทียนญี่ปุ่นเป็นวิธีการแสดงผลราคาที่ได้รับความนิยมมากที่สุดในการเทรด ประกอบด้วย 4 ข้อมูลสำคัญ: ราคาเปิด, ราคาปิด, ราคาสูงสุด, และราคาต่ำสุด</p><h2>Bullish Patterns</h2><h3>1. Hammer</h3><p>เป็นสัญญาณกลับตัวขาขึ้น มักปรากฏที่จุดต่ำสุดของแนวโน้มขาลง มีลักษณะตัวเทียนเล็กและหางยาวด้านล่าง</p><h3>2. Bullish Engulfing</h3><p>เกิดจากแท่งเทียนขาขึ้นที่ใหญ่กว่าและครอบคลุมแท่งเทียนขาลงก่อนหน้า แสดงถึงแรงซื้อที่เข้มแข็ง</p><h3>3. Morning Star</h3><p>รูปแบบ 3 แท่งเทียนที่บ่งบอกถึงการกลับตัวขาขึ้น ประกอบด้วยแท่งขาลง, แท่งเล็ก, และแท่งขาขึ้น</p><h2>Bearish Patterns</h2><h3>1. Shooting Star</h3><p>สัญญาณกลับตัวขาลง มีหางยาวด้านบนและตัวเทียนเล็ก บ่งบอกว่าแรงซื้อไม่สามารถรักษาราคาไว้ได้</p><h3>2. Bearish Engulfing</h3><p>แท่งเทียนขาลงที่ครอบคลุมแท่งเทียนขาขึ้นก่อนหน้า แสดงถึงแรงขายที่เข้มแข็ง</p><h3>3. Evening Star</h3><p>รูปแบบ 3 แท่งที่บ่งบอกการกลับตัวขาลง ตรงข้ามกับ Morning Star</p><h2>Continuation Patterns</h2><h3>1. Doji</h3><p>แสดงถึงความไม่แน่นอนของตลาด ราคาเปิดและปิดใกล้เคียงกัน</p><h3>2. Spinning Top</h3><p>มีตัวเทียนเล็กและหางยาวทั้งสองด้าน บ่งบอกถึงความลังเลของตลาด</p><h2>การใช้งานจริง</h2><p>การอ่าน Candlestick ควรใช้ร่วมกับเครื่องมือวิเคราะห์อื่นๆ เช่น Support/Resistance, Volume, และ Indicators เพื่อเพิ่มความแม่นยำในการตัดสินใจ</p><h2>สรุป</h2><p>Candlestick Patterns เป็นเครื่องมือที่ทรงพลังสำหรับการวิเคราะห์ตลาด แต่ไม่ควรใช้เพียงอย่างเดียว ควรผสมผสานกับการวิเคราะห์อื่นๆ และมีการบริหารความเสี่ยงที่ดี</p>', 'articles/candlestick-patterns.jpg', 'LongTrade Team', 10, 1, 1, '2025-11-23 19:17:44', 1, '\"[\\\"Candlestick\\\",\\\"Technical Analysis\\\",\\\"Chart Patterns\\\",\\\"Trading\\\"]\"', 6, '2025-11-25 19:17:44', '2025-12-01 03:29:50', NULL),
(3, 'risk-management-in-trading-complete-guide', 'การบริหารความเสี่ยงในการเทรด: คู่มือฉบับสมบูรณ์', 'การบริหารความเสี่ยงในการเทรด: คู่มือฉบับสมบูรณ์', 'เรียนรู้หลักการบริหารความเสี่ยงที่เทรดเดอร์มืออาชีพใช้ ครอบคลุม Position Sizing, Risk-Reward Ratio, Stop Loss, และการควบคุมอารมณ์', 'risk management, money management, position sizing, stop loss, trading psychology', 'การบริหารความเสี่ยง', NULL, NULL, NULL, 'summary_large_image', NULL, NULL, NULL, NULL, 'Article', NULL, 65, 'เรียนรู้หลักการบริหารความเสี่ยงที่จะช่วยปกป้องเงินทุนและเพิ่มโอกาสในการประสบความสำเร็จในการเทรดระยะยาว', '<h2>ทำไมการบริหารความเสี่ยงถึงสำคัญ?</h2><p>การบริหารความเสี่ยงเป็นหัวใจสำคัญของการเทรดที่ประสบความสำเร็จ แม้คุณจะมีกลยุทธ์การเทรดที่ดี แต่ถ้าไม่มีการบริหารความเสี่ยงที่เหมาะสม คุณอาจสูญเสียเงินทุนทั้งหมดได้</p><h2>กฎ 1% Rule</h2><p>อย่าเสี่ยงมากกว่า 1-2% ของเงินทุนทั้งหมดในการเทรดครั้งเดียว ตัวอย่าง: ถ้ามีเงินทุน 100,000 บาท ควรเสี่ยงไม่เกิน 1,000-2,000 บาทต่อการเทรด</p><h2>Position Sizing</h2><p>การคำนวณขนาดของ Position ที่เหมาะสม:</p><ul><li>กำหนดระดับ Stop Loss ก่อนเข้าเทรด</li><li>คำนวณจำนวน Lot ตามความเสี่ยงที่ยอมรับได้</li><li>ใช้สูตร: Position Size = (Account Balance × Risk %) / Stop Loss in Pips</li></ul><h2>Risk-Reward Ratio</h2><p>อัตราส่วนความเสี่ยงต่อผลตอบแทนที่แนะนำคือ 1:2 หรือมากกว่า หมายความว่าถ้าเสี่ยง 100 บาท ควรตั้งเป้ากำไรอย่างน้อย 200 บาท</p><h2>Stop Loss และ Take Profit</h2><h3>Stop Loss</h3><p>ตั้ง Stop Loss ทุกครั้งที่เข้าเทรด วางตำแหน่งที่มีเหตุผล เช่น ใต้/เหนือ Support/Resistance สำคัญ</p><h3>Take Profit</h3><p>กำหนดเป้าหมายกำไรที่ชัดเจน อาจใช้วิธี Partial Take Profit เพื่อล็อคกำไรบางส่วน</p><h2>Diversification</h2><p>อย่าเทรดเฉพาะคู่เงินเดียว กระจายความเสี่ยงไปยังหลายคู่เงินหรือหลายตลาด แต่ไม่ควรเทรดมากเกินไปจนควบคุมไม่ได้</p><h2>Emotional Control</h2><p>อารมณ์เป็นศัตรูที่ใหญ่ที่สุดของเทรดเดอร์:</p><ul><li>อย่าเทรดเพื่อแก้ตัวหลังขาดทุน (Revenge Trading)</li><li>อย่าเพิ่มขนาด Position เมื่อชนะติดต่อกัน (Overconfidence)</li><li>ยึดติดกับแผนการเทรดที่วางไว้</li></ul><h2>Trading Journal</h2><p>บันทึกการเทรดทุกครั้ง รวมถึง:</p><ul><li>เหตุผลในการเข้าเทรด</li><li>ผลลัพธ์</li><li>อารมณ์ในขณะนั้น</li><li>บทเรียนที่ได้รับ</li></ul><h2>สรุป</h2><p>การบริหารความเสี่ยงไม่ใช่การจำกัดกำไร แต่เป็นการปกป้องเงินทุนและสร้างความยั่งยืนในการเทรด เทรดเดอร์ที่ประสบความสำเร็จมักให้ความสำคัญกับการบริหารความเสี่ยงมากกว่าการหากลยุทธ์ที่ชนะ 100%</p>', 'articles/risk-management.jpg', 'LongTrade Team', 12, 1, 0, '2025-11-20 19:55:57', 1, '\"[\\\"Risk Management\\\",\\\"Money Management\\\",\\\"Trading Psychology\\\",\\\"Stop Loss\\\"]\"', 2, '2025-11-25 19:55:57', '2025-11-25 20:40:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `article_views`
--

CREATE TABLE `article_views` (
  `id` bigint UNSIGNED NOT NULL,
  `article_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `viewed_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `article_views`
--

INSERT INTO `article_views` (`id`, `article_id`, `user_id`, `ip_address`, `user_agent`, `viewed_at`) VALUES
(1, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:37:48'),
(2, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:37:49'),
(3, 2, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:39:39'),
(4, 2, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:39:40'),
(5, 3, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:40:00'),
(6, 3, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:40:01'),
(7, 2, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:42:03'),
(8, 2, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:42:03'),
(9, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:42:09'),
(10, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-25 20:42:09'),
(11, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-27 00:21:52'),
(12, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-27 00:21:53'),
(13, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-27 00:55:50'),
(14, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-27 00:55:53'),
(15, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-27 01:07:34'),
(16, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-27 01:07:39'),
(17, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-30 04:54:26'),
(18, 1, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-11-30 04:54:27'),
(19, 2, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-12-01 03:29:49'),
(20, 2, NULL, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '2025-12-01 03:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('longtrade-platform-cache-livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3', 'i:2;', 1765177047),
('longtrade-platform-cache-livewire-rate-limiter:a17961fa74e9275d529f489537f179c05d50c2f3:timer', 'i:1765177047;', 1765177047),
('longtrade-platform-cache-spatie.permission.cache', 'a:3:{s:5:\"alias\";a:4:{s:1:\"a\";s:2:\"id\";s:1:\"b\";s:4:\"name\";s:1:\"c\";s:10:\"guard_name\";s:1:\"r\";s:5:\"roles\";}s:11:\"permissions\";a:12:{i:0;a:4:{s:1:\"a\";i:1;s:1:\"b\";s:22:\"view_any_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:1;a:4:{s:1:\"a\";i:2;s:1:\"b\";s:18:\"view_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:2;a:4:{s:1:\"a\";i:3;s:1:\"b\";s:20:\"create_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:3;a:4:{s:1:\"a\";i:4;s:1:\"b\";s:20:\"update_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:4;a:4:{s:1:\"a\";i:5;s:1:\"b\";s:20:\"delete_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:5;a:4:{s:1:\"a\";i:6;s:1:\"b\";s:24:\"delete_any_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:6;a:4:{s:1:\"a\";i:7;s:1:\"b\";s:26:\"force_delete_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:7;a:4:{s:1:\"a\";i:8;s:1:\"b\";s:30:\"force_delete_any_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:8;a:4:{s:1:\"a\";i:9;s:1:\"b\";s:21:\"restore_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:9;a:4:{s:1:\"a\";i:10;s:1:\"b\";s:25:\"restore_any_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:10;a:4:{s:1:\"a\";i:11;s:1:\"b\";s:23:\"replicate_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:11;a:4:{s:1:\"a\";i:12;s:1:\"b\";s:21:\"reorder_site::setting\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}}s:5:\"roles\";a:1:{i:0;a:3:{s:1:\"a\";i:1;s:1:\"b\";s:11:\"super_admin\";s:1:\"c\";s:3:\"web\";}}}', 1765263438);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'general',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `type`, `icon`, `color`, `order`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Forex Basics', 'forex-basics', 'Sample category for course - Forex Basics', 'course', 'heroicon-o-tag', 'info', 1, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(2, 'Advanced Technical Analysis', 'advanced-technical-analysis', 'Sample category for course - Advanced Technical Analysis', 'course', 'heroicon-o-tag', 'info', 2, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(3, 'Fundamental Analysis', 'fundamental-analysis', 'Sample category for course - Fundamental Analysis', 'course', 'heroicon-o-tag', 'info', 3, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(4, 'Risk Management Masterclass', 'risk-management-masterclass', 'Sample category for course - Risk Management Masterclass', 'course', 'heroicon-o-tag', 'info', 4, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(5, 'Market News', 'market-news', 'Sample category for article - Market News', 'article', 'heroicon-o-tag', 'success', 1, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(6, 'Trading Strategies', 'trading-strategies', 'Sample category for article - Trading Strategies', 'article', 'heroicon-o-tag', 'success', 2, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(7, 'Psychology of Trading', 'psychology-of-trading', 'Sample category for article - Psychology of Trading', 'article', 'heroicon-o-tag', 'success', 3, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(8, 'Weekly Outlook', 'weekly-outlook', 'Sample category for article - Weekly Outlook', 'article', 'heroicon-o-tag', 'success', 4, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(9, 'Trend Indicators', 'trend-indicators', 'Sample category for indicator - Trend Indicators', 'indicator', 'heroicon-o-tag', 'warning', 1, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(10, 'Oscillators', 'oscillators', 'Sample category for indicator - Oscillators', 'indicator', 'heroicon-o-tag', 'warning', 2, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(11, 'Volume Indicators', 'volume-indicators', 'Sample category for indicator - Volume Indicators', 'indicator', 'heroicon-o-tag', 'warning', 3, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(12, 'Custom Indicators', 'custom-indicators', 'Sample category for indicator - Custom Indicators', 'indicator', 'heroicon-o-tag', 'warning', 4, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(13, 'Beginner Guides', 'beginner-guides', 'Sample category for ebook - Beginner Guides', 'ebook', 'heroicon-o-tag', 'primary', 1, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(14, 'Strategy Books', 'strategy-books', 'Sample category for ebook - Strategy Books', 'ebook', 'heroicon-o-tag', 'primary', 2, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(15, 'Mindset & Psychology', 'mindset-psychology', 'Sample category for ebook - Mindset & Psychology', 'ebook', 'heroicon-o-tag', 'primary', 3, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(16, 'Chart Patterns', 'chart-patterns', 'Sample category for ebook - Chart Patterns', 'ebook', 'heroicon-o-tag', 'primary', 4, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(17, 'Scalping EAs', 'scalping-eas', 'Sample category for expert_advisor - Scalping EAs', 'expert_advisor', 'heroicon-o-tag', 'danger', 1, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(18, 'Trend Following EAs', 'trend-following-eas', 'Sample category for expert_advisor - Trend Following EAs', 'expert_advisor', 'heroicon-o-tag', 'danger', 2, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(19, 'Grid Systems', 'grid-systems', 'Sample category for expert_advisor - Grid Systems', 'expert_advisor', 'heroicon-o-tag', 'danger', 3, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(20, 'Arbitrage EAs', 'arbitrage-eas', 'Sample category for expert_advisor - Arbitrage EAs', 'expert_advisor', 'heroicon-o-tag', 'danger', 4, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(21, 'Pine Script Strategies', 'pine-script-strategies', 'Sample category for tradingview - Pine Script Strategies', 'tradingview', 'heroicon-o-tag', 'gray', 1, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(22, 'Custom Chart Layouts', 'custom-chart-layouts', 'Sample category for tradingview - Custom Chart Layouts', 'tradingview', 'heroicon-o-tag', 'gray', 2, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(23, 'Alert Systems', 'alert-systems', 'Sample category for tradingview - Alert Systems', 'tradingview', 'heroicon-o-tag', 'gray', 3, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(24, 'Backtesting Templates', 'backtesting-templates', 'Sample category for tradingview - Backtesting Templates', 'tradingview', 'heroicon-o-tag', 'gray', 4, 1, '2025-11-24 19:32:57', '2025-11-24 19:32:57'),
(25, 'Grid Trading EAs', 'grid-trading-eas', 'Expert Advisors ที่ใช้กลยุทธ์ Grid Trading', 'ea', 'heroicon-o-squares-2x2', 'info', 3, 1, '2025-11-29 02:16:54', '2025-11-29 02:16:54'),
(26, 'Breakout EAs', 'breakout-eas', 'Expert Advisors สำหรับจับ Breakout', 'ea', 'heroicon-o-arrow-up-circle', 'danger', 4, 1, '2025-11-29 02:16:54', '2025-11-29 02:16:54'),
(27, 'News Trading EAs', 'news-trading-eas', 'Expert Advisors สำหรับเทรดตามข่าว', 'ea', 'heroicon-o-newspaper', 'primary', 5, 1, '2025-11-29 02:16:54', '2025-11-29 02:16:54'),
(28, 'Hedging EAs', 'hedging-eas', 'Expert Advisors ที่ใช้กลยุทธ์ Hedging', 'ea', 'heroicon-o-shield-check', 'gray', 6, 1, '2025-11-29 02:16:54', '2025-11-29 02:16:54'),
(29, 'Trading Basics', 'trading-basics', 'Basic trading courses', 'general', NULL, NULL, 0, 1, '2025-12-01 03:21:34', '2025-12-01 03:21:34');

-- --------------------------------------------------------

--
-- Table structure for table `certificates`
--

CREATE TABLE `certificates` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `course_id` bigint UNSIGNED NOT NULL,
  `enrollment_id` bigint UNSIGNED NOT NULL,
  `certificate_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `issued_date` date NOT NULL,
  `verification_code` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pdf_path` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint UNSIGNED NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('percentage','fixed_amount') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'percentage',
  `value` decimal(10,2) NOT NULL,
  `min_purchase` decimal(10,2) NOT NULL DEFAULT '0.00',
  `max_discount` decimal(10,2) DEFAULT NULL,
  `usage_limit` int DEFAULT NULL,
  `used_count` int NOT NULL DEFAULT '0',
  `valid_from` timestamp NULL DEFAULT NULL,
  `valid_until` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `og_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `og_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `canonical_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schema_markup` json DEFAULT NULL,
  `cover` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `original_price` decimal(10,2) DEFAULT NULL,
  `hours` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'beginner',
  `lessons_count` int NOT NULL DEFAULT '0',
  `what_you_learn` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `requirements` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `average_rating` decimal(3,2) NOT NULL DEFAULT '0.00',
  `reviews_count` int NOT NULL DEFAULT '0',
  `order` int NOT NULL DEFAULT '0',
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `unlock_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sections` json DEFAULT NULL,
  `quiz` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `slug`, `title`, `description`, `meta_title`, `meta_description`, `meta_keywords`, `og_image`, `og_description`, `canonical_url`, `schema_markup`, `cover`, `price`, `original_price`, `hours`, `level`, `lessons_count`, `what_you_learn`, `requirements`, `is_published`, `is_featured`, `average_rating`, `reviews_count`, `order`, `category_id`, `unlock_code`, `sections`, `quiz`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'forex-trading-for-beginners', 'Forex Trading for Beginners', 'Learn Forex trading from basic to advanced.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1990.00, 2990.00, '2', 'beginner', 10, '[\"Understand Forex basics\",\"Learn trading strategies\"]', '[\"Basic computer skills\"]', 1, 1, 0.00, 0, 0, 1, 'FOREX2025', '[{\"id\": \"section-1\", \"title\": \"Introduction to Forex\", \"lessons\": [{\"id\": \"lesson-1\", \"title\": \"What is Forex?\", \"duration\": \"10:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}, {\"id\": \"lesson-2\", \"title\": \"Forex Market Structure\", \"duration\": \"12:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}, {\"id\": \"lesson-3\", \"title\": \"Currency Pairs Explained\", \"duration\": \"15:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}]}, {\"id\": \"section-2\", \"title\": \"Technical Analysis\", \"lessons\": [{\"id\": \"lesson-4\", \"title\": \"Chart Patterns\", \"duration\": \"20:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}, {\"id\": \"lesson-5\", \"title\": \"Support and Resistance\", \"duration\": \"18:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}, {\"id\": \"lesson-6\", \"title\": \"Trend Lines\", \"duration\": \"16:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}]}, {\"id\": \"section-3\", \"title\": \"Risk Management\", \"lessons\": [{\"id\": \"lesson-7\", \"title\": \"Position Sizing\", \"duration\": \"14:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}, {\"id\": \"lesson-8\", \"title\": \"Stop Loss Strategies\", \"duration\": \"17:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}, {\"id\": \"lesson-9\", \"title\": \"Risk-Reward Ratio\", \"duration\": \"13:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}, {\"id\": \"lesson-10\", \"title\": \"Trading Psychology\", \"duration\": \"19:00\", \"video_id\": \"dQw4w9WgXcQ\", \"video_type\": \"youtube\"}]}]', NULL, '2025-11-25 05:20:04', '2025-11-25 06:13:15', NULL),
(2, 'One-day-Gold-Trading', 'One day Gold Trading - คอร์สเร่งรัดเทรดทองเป็นใน 1 วัน', 'One day Gold Trading - คอร์สเร่งรัดเทรดทองเป็นใน 1 วัน', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/courses/courses1.jpg', 1990.00, 3990.00, '2 ชั่วโมง 40 นาที', 'beginner', 9, NULL, NULL, 1, 1, 0.00, 0, 0, 29, 'LT-98989', '[{\"id\": \"sec1\", \"title\": \"1.เทรดทองคืออะไร?\", \"lessons\": [{\"id\": \"l1\", \"title\": \"เทรดทองคืออะไร?\", \"videoId\": \"https://youtu.be/2i4PHWK-JO4\", \"duration\": \"9.45 นาที\", \"youtubeId\": \"2i4PHWK-JO4\"}]}, {\"id\": \"sec2\", \"title\": \"2.มือใหม่เริ่มเทรดทองต้องใช้อะไรบ้าง?\", \"lessons\": [{\"id\": \"l2\", \"title\": \"มือใหม่เริ่มเทรดทองต้องใช้อะไรบ้าง?\", \"videoId\": \"https://youtu.be/G7nrxtzWSCo\", \"duration\": \"10.58 นาที\", \"youtubeId\": \"G7nrxtzWSCo\"}]}, {\"id\": \"sec3\", \"title\": \"3.เทรดทองคืออะไร?\", \"lessons\": [{\"id\": \"l3\", \"title\": \"ทุนเริ่มต้นเทรดทอง ใช้เงินกี่บาท?\", \"videoId\": \"https://youtu.be/gLRxBc7lr-4\", \"duration\": \"24.12 นาที\", \"youtubeId\": \"gLRxBc7lr-4\"}]}, {\"id\": \"sec4\", \"title\": \"4.การเชื่อมต่อบัญชี และใช้งานโปรแกรมที่จำเป็น\", \"lessons\": [{\"id\": \"l4\", \"title\": \"การเชื่อมต่อบัญชี และใช้งานโปรแกรมที่จำเป็น\", \"videoId\": \"https://youtu.be/6OMhgW03w2c\", \"duration\": \"22.00 นาที\", \"youtubeId\": \"6OMhgW03w2c\"}]}, {\"id\": \"sec5\", \"title\": \"5.คำศัพท์เบื้องต้นที่ต้องรู้\", \"lessons\": [{\"id\": \"l5\", \"title\": \"คำศัพท์เบื้องต้นที่ต้องรู้\", \"videoId\": \"https://youtu.be/mLMCQQ-rA3w?si=sGvw3Ojh3K0OdEQ3\", \"duration\": \"30.42 นาที\", \"youtubeId\": \"mLMCQQ-rA3w\"}]}, {\"id\": \"sec6\", \"title\": \"6.เทรดทองกำไรยังไง ขาดทุนยังไง?\", \"lessons\": [{\"id\": \"l6\", \"title\": \"เทรดทองกำไรยังไง ขาดทุนยังไง?\", \"videoId\": \"https://youtu.be/b8qkcWodvlI\", \"duration\": \"16.35 นาที\", \"youtubeId\": \"b8qkcWodvlI\"}]}, {\"id\": \"sec7\", \"title\": \"7.เข้าสู่สนามจริง ( แบบมือใหม่ )\", \"lessons\": [{\"id\": \"l7\", \"title\": \"เข้าสู่สนามจริง ( แบบมือใหม่ )\", \"videoId\": \"https://youtu.be/PUJ9rBCIvAU\", \"duration\": \"6.25 นาที\", \"youtubeId\": \"PUJ9rBCIvAU\"}]}, {\"id\": \"sec8\", \"title\": \"8.การวิเคราะห์กราฟและสร้าง Trading Plan\", \"lessons\": [{\"id\": \"l8\", \"title\": \"การวิเคราะห์กราฟและสร้าง Trading Plan\", \"videoId\": \"https://youtu.be/RJ12ZPBwCDM\", \"duration\": \"28.47 นาที\", \"youtubeId\": \"RJ12ZPBwCDM\"}]}, {\"id\": \"sec9\", \"title\": \"9.Mindset ที่จำเป็นในการเทรด\", \"lessons\": [{\"id\": \"l9\", \"title\": \"Mindset ที่จำเป็นในการเทรด\", \"videoId\": \"https://youtu.be/7qR_rf7EpFI\", \"duration\": \"11.20 นาที\", \"youtubeId\": \"7qR_rf7EpFI\"}]}]', '{\"questions\": [{\"q\": {\"label\": \"Git ใช้ทำอะไรหลักๆ?\"}, \"id\": \"q1\", \"title\": \"Git ใช้ทำอะไรหลักๆ?\", \"choices\": [{\"id\": \"a\", \"label\": \"จัดการ Dependencies\"}, {\"id\": \"b\", \"label\": \"จัดการเวอร์ชันโค้ด\"}, {\"id\": \"c\", \"label\": \"รันเซิร์ฟเวอร์\"}, {\"id\": \"d\", \"label\": \"บีบอัดภาพ\"}], \"answerId\": \"b\"}, {\"q\": {\"label\": \"คำสั่ง `useState` อยู่ในไลบรารีใด?\"}, \"id\": \"q2\", \"title\": \"คำสั่ง `useState` อยู่ในไลบรารีใด?\", \"choices\": [{\"id\": \"a\", \"label\": \"React\"}, {\"id\": \"b\", \"label\": \"Next.js\"}, {\"id\": \"c\", \"label\": \"Node.js\"}, {\"id\": \"d\", \"label\": \"Vite\"}], \"answerId\": \"a\"}, {\"q\": {\"label\": \"CSS Flexbox ใช้แก้ปัญหาแนวใดเป็นหลัก?\"}, \"id\": \"q3\", \"title\": \"CSS Flexbox ใช้แก้ปัญหาแนวใดเป็นหลัก?\", \"choices\": [{\"id\": \"a\", \"label\": \"การจัดวาง Layout และจัดเรียงองค์ประกอบ\"}, {\"id\": \"b\", \"label\": \"จัดการ Request\"}, {\"id\": \"c\", \"label\": \"ทำแอนิเมชัน 3D\"}, {\"id\": \"d\", \"label\": \"การทำ Routing\"}], \"answerId\": \"a\"}], \"passingScore\": 70}', '2025-12-01 03:21:34', '2025-12-01 03:21:34', NULL),
(3, 'Technic-30MBO', 'เทคนิคการเทรดท่า 30MBO - เรียบง่ายแต่ทรงพลัง', 'เทคนิคการเทรดท่า 30MBO - เรียบง่ายแต่ทรงพลัง', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/courses/courses3.jpg', 2990.00, 5990.00, '2 ชั่วโมง 40 นาที', 'beginner', 8, NULL, NULL, 1, 1, 0.00, 0, 0, 29, 'LT-46466', '[{\"id\": \"p-sec1\", \"title\": \"1.30MBO คืออะไร\", \"lessons\": [{\"id\": \"p1\", \"title\": \"30MBO คืออะไร\", \"videoId\": \"https://youtu.be/7Z2QutlUvgo\", \"duration\": \"10 นาที\", \"youtubeId\": \"7Z2QutlUvgo\"}]}, {\"id\": \"p-sec2\", \"title\": \"2.ขั้นตอนการใช้ท่าเทรดนี้\", \"lessons\": [{\"id\": \"p2\", \"title\": \"ขั้นตอนการใช้ท่าเทรดนี้\", \"videoId\": \"https://youtu.be/Ed4mRf3tI8o\", \"duration\": \"30 นาที\", \"youtubeId\": \"Ed4mRf3tI8o\"}]}, {\"id\": \"p-sec3\", \"title\": \"3.ตัวอย่างการเข้าเทรดด้วยท่า 30MBO\", \"lessons\": [{\"id\": \"p3\", \"title\": \"ตัวอย่างการเข้าเทรดด้วยท่า 30MBO\", \"videoId\": \"https://youtu.be/9gvpG5_kA6U\", \"duration\": \"10 นาที\", \"youtubeId\": \"9gvpG5_kA6U\"}]}, {\"id\": \"p-sec4\", \"title\": \"4.เงื่อนไขสำคัญ\", \"lessons\": [{\"id\": \"p4\", \"title\": \"เงื่อนไขสำคัญ\", \"videoId\": \"https://youtu.be/hkss4Eu-TVA\", \"duration\": \"10 นาที\", \"youtubeId\": \"hkss4Eu-TVA\"}]}, {\"id\": \"p-sec5\", \"title\": \"5.การตั้ง Stop loss และ Trailing stop Loss\", \"lessons\": [{\"id\": \"p5\", \"title\": \"การตั้ง Stop loss และ Trailing stop Loss\", \"videoId\": \"https://youtu.be/PWBhmf7-UJ8\", \"duration\": \"10 นาที\", \"youtubeId\": \"PWBhmf7-UJ8\"}]}, {\"id\": \"p-sec6\", \"title\": \"6.สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้\", \"lessons\": [{\"id\": \"p6\", \"title\": \"สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้\", \"videoId\": \"https://youtu.be/srttoh_kT38\", \"duration\": \"30 นาที\", \"youtubeId\": \"srttoh_kT38\"}]}, {\"id\": \"p-sec7\", \"title\": \"7.ตลาดที่เหมาะสมกับท่าเทรดนี้\", \"lessons\": [{\"id\": \"p7\", \"title\": \"ตลาดที่เหมาะสมกับท่าเทรดนี\", \"videoId\": \"https://youtu.be/ObySniX37n0\", \"duration\": \"10 นาที\", \"youtubeId\": \"ObySniX37n0\"}]}, {\"id\": \"p-sec8\", \"title\": \"8.Case study ท่าเทรด 30MBO\", \"lessons\": [{\"id\": \"p8\", \"title\": \"Case study ท่าเทรด 30MBO\", \"videoId\": \"https://youtu.be/hTmIBf4dGEc\", \"duration\": \"10 นาที\", \"youtubeId\": \"hTmIBf4dGEc\"}]}]', '{\"questions\": [{\"q\": {\"label\": \"Pandas ใช้โครงสร้างข้อมูลหลักชื่อว่าอะไร?\"}, \"id\": \"py1\", \"title\": \"Pandas ใช้โครงสร้างข้อมูลหลักชื่อว่าอะไร?\", \"choices\": [{\"id\": \"a\", \"label\": \"Series / DataFrame\"}, {\"id\": \"b\", \"label\": \"Tensor\"}, {\"id\": \"c\", \"label\": \"RDB Table\"}, {\"id\": \"d\", \"label\": \"Queue\"}], \"answerId\": \"a\"}, {\"q\": {\"label\": \"NumPy array โดดเด่นเรื่องใด?\"}, \"id\": \"py2\", \"title\": \"NumPy array โดดเด่นเรื่องใด?\", \"choices\": [{\"id\": \"a\", \"label\": \"การเรนเดอร์กราฟ 3D\"}, {\"id\": \"b\", \"label\": \"การคำนวณเชิงเวกเตอร์ประสิทธิภาพสูง\"}, {\"id\": \"c\", \"label\": \"ทำเว็บเซิร์ฟเวอร์\"}, {\"id\": \"d\", \"label\": \"จัดการสตรีมวิดีโอ\"}], \"answerId\": \"b\"}], \"passingScore\": 70}', '2025-12-01 03:21:34', '2025-12-01 03:21:34', NULL),
(4, 'Stochastic-Pop-Pop', 'Stochastic Pop - Pop แล้วไป! จังหวะไว กำไรแรง', 'Stochastic Pop - Pop แล้วไป! จังหวะไว กำไรแรง', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/courses/courses2.jpg', 2990.00, 5990.00, '2 ชั่วโมง 10 นาที', 'beginner', 7, NULL, NULL, 1, 1, 0.00, 0, 0, 29, 'LT-19655', '[{\"id\": \"dm1\", \"title\": \"Stochastic Pop คือ อะไร\", \"lessons\": [{\"id\": \"dm1-1\", \"title\": \"Stochastic Pop คือ อะไร\", \"videoId\": \"https://youtu.be/OoHiYiSwft0?si=ENKk1e5bZIxguOV_\", \"duration\": \"15 นาที\", \"youtubeId\": \"OoHiYiSwft0\"}]}, {\"id\": \"dm2\", \"title\": \"แนวคิดพื้นฐาน Stochastic Oscillator\", \"lessons\": [{\"id\": \"dm1-2\", \"title\": \"แนวคิดพื้นฐาน Stochastic Oscillator\", \"videoId\": \"https://youtu.be/lVgxXtZUxDY\", \"duration\": \"15 นาที\", \"youtubeId\": \"lVgxXtZUxDY\"}]}, {\"id\": \"dm3\", \"title\": \"แนวคิด Stochastic Pop (SP)\", \"lessons\": [{\"id\": \"dm1-3\", \"title\": \"แนวคิด Stochastic Pop (SP)\", \"videoId\": \"https://youtu.be/nNhY2pRIAV0\", \"duration\": \"15 นาที\", \"youtubeId\": \"nNhY2pRIAV0\"}]}, {\"id\": \"dm4\", \"title\": \"การเข้าเทรดด้วยท่า Stochastic Pop (SP)\", \"lessons\": [{\"id\": \"dm1-4\", \"title\": \"การเข้าเทรดด้วยท่า Stochastic Pop (SP)\", \"videoId\": \"https://youtu.be/UzfOdLmcI-4\", \"duration\": \"15 นาที\", \"youtubeId\": \"UzfOdLmcI-4\"}]}, {\"id\": \"dm5\", \"title\": \"สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้\", \"lessons\": [{\"id\": \"dm1-5\", \"title\": \"สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้\", \"videoId\": \"https://youtu.be/0Cfzbo5K2h8\", \"duration\": \"15 นาที\", \"youtubeId\": \"0Cfzbo5K2h8\"}]}, {\"id\": \"dm6\", \"title\": \"กลยุทธ์ที่แนะนำเพิ่มเติม\", \"lessons\": [{\"id\": \"dm1-6\", \"title\": \"กลยุทธ์ที่แนะนำเพิ่มเติม\", \"videoId\": \"dQw4w9WgXcQ\", \"duration\": \"15 นาที\", \"youtubeId\": \"dQw4w9WgXcQ\"}]}, {\"id\": \"dm7\", \"title\": \"ตลาดที่เหมาะสมสำหรับการเทรดท่า SP\", \"lessons\": [{\"id\": \"dm1-7\", \"title\": \"ตลาดที่เหมาะสมสำหรับการเทรดท่า SP\", \"videoId\": \"https://youtu.be/KHiKrag2TmI\", \"duration\": \"15 นาที\", \"youtubeId\": \"KHiKrag2TmI\"}]}]', '{\"questions\": [{\"q\": {\"label\": \"KPI ในดิจิทัลมาร์เก็ตติ้งควร…\"}, \"id\": \"dmq1\", \"title\": \"KPI ในดิจิทัลมาร์เก็ตติ้งควร…\", \"choices\": [{\"id\": \"a\", \"label\": \"ชัดเจน/วัดได้/มีกรอบเวลา\"}, {\"id\": \"b\", \"label\": \"กำหนดกว้างๆ\"}, {\"id\": \"c\", \"label\": \"ไม่ต้องอิงเป้าธุรกิจ\"}, {\"id\": \"d\", \"label\": \"วัดไม่ได้ก็ได้\"}], \"answerId\": \"a\"}], \"passingScore\": 70}', '2025-12-01 03:21:34', '2025-12-01 03:21:34', NULL),
(5, 'MACS', 'กลยุทธ์ MACS – “สร้างแผนเทรดให้ชนะตลาด', 'ออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อที่ใช้งานง่าย', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/courses/courses4.jpg', 3990.00, 4900.00, '2 ชั่วโมง 30 นาที', 'beginner', 8, NULL, NULL, 1, 1, 0.00, 0, 0, 29, 'LT-88887', '[{\"id\": \"MA1\", \"title\": \"1.MACS คืออะไร\", \"lessons\": [{\"id\": \"p1\", \"title\": \"MACS คืออะไร\", \"videoId\": \"https://youtu.be/7Z2QutlUvgo\", \"duration\": \"10 นาที\", \"youtubeId\": \"7Z2QutlUvgo\"}]}, {\"id\": \"MA2\", \"title\": \"2.ขึ้นตอนการใช้ท่าเทรดนี้\", \"lessons\": [{\"id\": \"p2\", \"title\": \"ขึ้นตอนการใช้ท่าเทรดนี้\", \"videoId\": \"https://youtu.be/Ed4mRf3tI8o\", \"duration\": \"30 นาที\", \"youtubeId\": \"Ed4mRf3tI8o\"}]}, {\"id\": \"MA3\", \"title\": \"3.ตัวอย่างกราเข้าเทรดด้วยท่า MACS\", \"lessons\": [{\"id\": \"p3\", \"title\": \"ตัวอย่างกราเข้าเทรดด้วยท่า MACS\", \"videoId\": \"https://youtu.be/9gvpG5_kA6U\", \"duration\": \"10 นาที\", \"youtubeId\": \"9gvpG5_kA6U\"}]}, {\"id\": \"MA4\", \"title\": \"4.เงื่อนไขสำคัญ\", \"lessons\": [{\"id\": \"p4\", \"title\": \"เงื่อนไขสำคัญ\", \"videoId\": \"https://youtu.be/hkss4Eu-TVA\", \"duration\": \"10 นาที\", \"youtubeId\": \"hkss4Eu-TVA\"}]}, {\"id\": \"MA5\", \"title\": \"5.การตั้ง Stop loss และ Trailing stop Loss\", \"lessons\": [{\"id\": \"p5\", \"title\": \"การตั้ง Stop loss และ Trailing stop Loss\", \"videoId\": \"https://youtu.be/PWBhmf7-UJ8\", \"duration\": \"10 นาที\", \"youtubeId\": \"PWBhmf7-UJ8\"}]}, {\"id\": \"MA6\", \"title\": \"6.กลยุทธ์ที่แนะนำเพิ่มเติม\", \"lessons\": [{\"id\": \"p6\", \"title\": \"กลยุทธ์ที่แนะนำเพิ่มเติม\", \"videoId\": \"https://youtu.be/srttoh_kT38\", \"duration\": \"30 นาที\", \"youtubeId\": \"srttoh_kT38\"}]}, {\"id\": \"MA7\", \"title\": \"7.สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้\", \"lessons\": [{\"id\": \"p7\", \"title\": \"สิ่งที่ควรรู้ในการใช้ท่าเทรดนี้\", \"videoId\": \"https://youtu.be/ObySniX37n0\", \"duration\": \"10 นาที\", \"youtubeId\": \"ObySniX37n0\"}]}, {\"id\": \"MA8\", \"title\": \"8.Case study ท่าเทรด MACS\", \"lessons\": [{\"id\": \"p8\", \"title\": \"Case study ท่าเทรด MACS\", \"videoId\": \"https://youtu.be/hTmIBf4dGEc\", \"duration\": \"10 นาที\", \"youtubeId\": \"hTmIBf4dGEc\"}]}]', '{\"questions\": [{\"q\": {\"label\": \"Primary action ควร…\"}, \"id\": \"uxq1\", \"title\": \"Primary action ควร…\", \"choices\": [{\"id\": \"a\", \"label\": \"วางเด่น/สม่ำเสมอ\"}, {\"id\": \"b\", \"label\": \"สีเทาอ่อน\"}, {\"id\": \"c\", \"label\": \"ซ่อนในเมนู\"}, {\"id\": \"d\", \"label\": \"ตัวหนังสือเล็ก\"}], \"answerId\": \"a\"}], \"passingScore\": 70}', '2025-12-01 03:21:34', '2025-12-01 03:21:34', NULL),
(6, 'FIBONACCI-MASTERCLASS', 'FIBONACCI MASTERCLASS – ถอดรหัสจังหวะตลาดด้วยตัวเลขทองคำ', 'หลักการลงทุนหุ้น วิเคราะห์ปัจจัยพื้นฐานและกราฟเทคนิค', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/courses/courses5.jpg', 3990.00, 4900.00, '2 ชั่วโมง 20 นาที', 'beginner', 12, NULL, NULL, 1, 1, 0.00, 0, 0, 29, 'LT-64646', '[{\"id\": \"MA1\", \"title\": \"1.แนะนำเรื่องฟีโบนัชชี\", \"lessons\": [{\"id\": \"p1\", \"title\": \"แนะนำเรื่องฟีโบนัชชี\", \"videoId\": \"https://youtu.be/7Z2QutlUvgo\", \"duration\": \"10 นาที\", \"youtubeId\": \"7Z2QutlUvgo\"}]}, {\"id\": \"MA2\", \"title\": \"2.ความจำเป็นในการเข้าใจและระบุแนวโน้มให้ถูกต้อง\", \"lessons\": [{\"id\": \"p2\", \"title\": \"ความจำเป็นในการเข้าใจและระบุแนวโน้มให้ถูกต้อง\", \"videoId\": \"https://youtu.be/Ed4mRf3tI8o\", \"duration\": \"30 นาที\", \"youtubeId\": \"Ed4mRf3tI8o\"}]}, {\"id\": \"MA3\", \"title\": \"3.ระดับการย่อตัวของฟีโบนัชชี\", \"lessons\": [{\"id\": \"p3\", \"title\": \"ระดับการย่อตัวของฟีโบนัชชี\", \"videoId\": \"https://youtu.be/9gvpG5_kA6U\", \"duration\": \"10 นาที\", \"youtubeId\": \"9gvpG5_kA6U\"}]}, {\"id\": \"MA4\", \"title\": \"4.ระดับการคาดการณ์ของฟีโบนัชชี\", \"lessons\": [{\"id\": \"p4\", \"title\": \"ระดับการคาดการณ์ของฟีโบนัชชี\", \"videoId\": \"https://youtu.be/hkss4Eu-TVA\", \"duration\": \"10 นาที\", \"youtubeId\": \"hkss4Eu-TVA\"}]}, {\"id\": \"MA5\", \"title\": \"5.พลังของการบรรจบกันของฟีโบนัชชี\", \"lessons\": [{\"id\": \"p5\", \"title\": \"พลังของการบรรจบกันของฟีโบนัชชี\", \"videoId\": \"https://youtu.be/PWBhmf7-UJ8\", \"duration\": \"10 นาที\", \"youtubeId\": \"PWBhmf7-UJ8\"}]}, {\"id\": \"MA6\", \"title\": \"6.ช่วงเวลาที่เหมาะสมในการเปิดสถานะ\", \"lessons\": [{\"id\": \"p6\", \"title\": \"ช่วงเวลาที่เหมาะสมในการเปิดสถานะ\", \"videoId\": \"https://youtu.be/srttoh_kT38\", \"duration\": \"30 นาที\", \"youtubeId\": \"srttoh_kT38\"}]}, {\"id\": \"MA7\", \"title\": \"7.วิธีการเพิ่มประสิทธิภาพของจุดเข้าเทรด\", \"lessons\": [{\"id\": \"p7\", \"title\": \"วิธีการเพิ่มประสิทธิภาพของจุดเข้าเทรด\", \"videoId\": \"https://youtu.be/ObySniX37n0\", \"duration\": \"10 นาที\", \"youtubeId\": \"ObySniX37n0\"}]}, {\"id\": \"MA8\", \"title\": \"8.ศิลปะของการออกจากการเทรด\", \"lessons\": [{\"id\": \"p8\", \"title\": \"ศิลปะของการออกจากการเทรด\", \"videoId\": \"https://youtu.be/hTmIBf4dGEc\", \"duration\": \"10 นาที\", \"youtubeId\": \"hTmIBf4dGEc\"}]}, {\"id\": \"MA9\", \"title\": \"9.การผสานกันอย่างยอดเยี่ยมระหว่างฟีโบนัชชีและคลื่นเอลเลียต\", \"lessons\": [{\"id\": \"p9\", \"title\": \"การผสานกันอย่างยอดเยี่ยมระหว่างฟีโบนัชชีและคลื่นเอลเลียต\", \"videoId\": \"https://youtu.be/PWBhmf7-UJ8\", \"duration\": \"10 นาที\", \"youtubeId\": \"PWBhmf7-UJ8\"}]}, {\"id\": \"MA10\", \"title\": \"10.เคล็ดลับของการบริหารการเทรดที่ดีขึ้น\", \"lessons\": [{\"id\": \"p10\", \"title\": \"เคล็ดลับของการบริหารการเทรดที่ดีขึ้น\", \"videoId\": \"https://youtu.be/srttoh_kT38\", \"duration\": \"30 นาที\", \"youtubeId\": \"srttoh_kT38\"}]}, {\"id\": \"MA11\", \"title\": \"11.ความผิดพลาดใหญ่ที่อาจทำให้คุณเสียเงินมากมาย\", \"lessons\": [{\"id\": \"p11\", \"title\": \"ความผิดพลาดใหญ่ที่อาจทำให้คุณเสียเงินมากมาย\", \"videoId\": \"https://youtu.be/ObySniX37n0\", \"duration\": \"10 นาที\", \"youtubeId\": \"ObySniX37n0\"}]}, {\"id\": \"MA12\", \"title\": \"12.เครื่องมือฟีโบนัชชีที่ทรงพลังในการเทรดจริง\", \"lessons\": [{\"id\": \"p12\", \"title\": \"เครื่องมือฟีโบนัชชีที่ทรงพลังในการเทรดจริง\", \"videoId\": \"https://youtu.be/hTmIBf4dGEc\", \"duration\": \"10 นาที\", \"youtubeId\": \"hTmIBf4dGEc\"}]}]', '{\"questions\": [{\"q\": {\"label\": \"Stop loss มีไว้เพื่อ…\"}, \"id\": \"stq1\", \"title\": \"Stop loss มีไว้เพื่อ…\", \"choices\": [{\"id\": \"a\", \"label\": \"จำกัดความเสี่ยง\"}, {\"id\": \"b\", \"label\": \"เพิ่มความเสี่ยง\"}, {\"id\": \"c\", \"label\": \"ทำให้ออเดอร์ช้าลง\"}, {\"id\": \"d\", \"label\": \"ดูกราฟสวยขึ้น\"}], \"answerId\": \"a\"}], \"passingScore\": 70}', '2025-12-01 03:21:34', '2025-12-01 03:21:34', NULL),
(7, '76Graph', 'ถอดรหัสแท่งเทียน 76 รูปแบบ – ทุกแท่งคือร่องรอยของเงิน… อยู่ที่คุณจะมองเห็นหรือไม่', 'พื้นฐานคริปโต โทเค็น และการจัดการความเสี่ยง', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/courses/courses6.jpg', 3990.00, 4900.00, '1 ชั่วโมง 50 นาที', 'beginner', 1, NULL, NULL, 1, 1, 0.00, 0, 0, 29, 'LT-25939', '[{\"id\": \"cb1\", \"title\": \"Section 1 : ปูพื้นฐานสู่โลกของแท่งเทียน (Introduction)\", \"lessons\": [{\"id\": \"cb1-1\", \"title\": \"แนะนำบทเรียน (Introduction)\", \"videoId\": \"dQw4w9WgXcQ\", \"duration\": \"20 นาที\", \"youtubeId\": \"dQw4w9WgXcQ\"}]}]', '{\"questions\": [{\"q\": {\"label\": \"Cold wallet โดดเด่นเรื่อง…\"}, \"id\": \"cbq1\", \"title\": \"Cold wallet โดดเด่นเรื่อง…\", \"choices\": [{\"id\": \"a\", \"label\": \"ความปลอดภัยสูง\"}, {\"id\": \"b\", \"label\": \"ใช้งานออนไลน์สะดวก\"}, {\"id\": \"c\", \"label\": \"โอนเร็วที่สุด\"}, {\"id\": \"d\", \"label\": \"จ่ายดอกเบี้ย\"}], \"answerId\": \"a\"}], \"passingScore\": 70}', '2025-12-01 03:21:34', '2025-12-01 03:21:34', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `course_schedules`
--

CREATE TABLE `course_schedules` (
  `id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ebooks`
--

CREATE TABLE `ebooks` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pages_count` int DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `focus_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `og_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `og_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `og_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_card` enum('summary','summary_large_image') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'summary_large_image',
  `twitter_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `twitter_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `canonical_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schema_type` enum('Book','Product','DigitalDocument') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Book',
  `schema_data` json DEFAULT NULL,
  `seo_score` int NOT NULL DEFAULT '0',
  `cover_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `original_price` decimal(10,2) DEFAULT NULL,
  `pages` int DEFAULT NULL,
  `format` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pdf',
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preview_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `access_type` enum('free','members_only','premium') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'free',
  `preview_pages` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `preview_percentage` int NOT NULL DEFAULT '10',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `average_rating` decimal(3,2) NOT NULL DEFAULT '0.00',
  `reviews_count` int NOT NULL DEFAULT '0',
  `downloads_count` int NOT NULL DEFAULT '0',
  `views_count` int NOT NULL DEFAULT '0',
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ebooks`
--

INSERT INTO `ebooks` (`id`, `slug`, `title`, `author`, `pages_count`, `description`, `meta_title`, `meta_description`, `meta_keywords`, `focus_keyword`, `og_title`, `og_description`, `og_image`, `twitter_card`, `twitter_title`, `twitter_description`, `twitter_image`, `canonical_url`, `schema_type`, `schema_data`, `seo_score`, `cover_image`, `price`, `original_price`, `pages`, `format`, `file_path`, `preview_link`, `is_published`, `access_type`, `preview_pages`, `preview_percentage`, `is_featured`, `average_rating`, `reviews_count`, `downloads_count`, `views_count`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'forex-trading-complete-guide', 'คู่มือการเทรด Forex ฉบับสมบูรณ์', 'LongTrade Academy', 150, 'คู่มือการเทรด Forex ที่ครอบคลุมทุกเรื่องที่คุณต้องรู้ ตั้งแต่พื้นฐานจนถึงกลยุทธ์ขั้นสูง เหมาะสำหรับทั้งมือใหม่และมืออาชีพ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'summary_large_image', NULL, NULL, NULL, NULL, 'Book', NULL, 45, 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800', 499.00, 999.00, 150, 'PDF', '/ebooks/forex-trading-complete-guide.pdf', '/ebooks/preview/forex-trading-complete-guide', 1, 'premium', '[1,2,3,4,5]', 10, 1, 0.00, 0, 1250, 5434, 1, '2025-11-25 20:49:07', '2025-11-25 21:58:42', NULL),
(2, 'technical-analysis-masterclass', 'Technical Analysis Masterclass', 'Dr. Somchai Tradingpro', 200, 'เรียนรู้การวิเคราะห์ทางเทคนิคแบบมืออาชีพ ครอบคลุมทุก Indicator, Chart Patterns, และกลยุทธ์การเทรดขั้นสูง พร้อมตัวอย่างจริงจากตลาด', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'summary_large_image', NULL, NULL, NULL, NULL, 'Book', NULL, 55, 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=800', 0.00, 0.00, 200, 'PDF', '/ebooks/technical-analysis-masterclass.pdf', '/ebooks/preview/technical-analysis-masterclass', 1, 'free', '[1,2,3,4,5,6,7,8,9,10]', 100, 1, 0.00, 0, 3420, 8954, 1, '2025-11-25 20:54:12', '2025-11-25 21:58:42', NULL),
(3, 'crypto-trading-strategies', 'กลยุทธ์การเทรด Cryptocurrency', 'Blockchain Expert Team', 180, 'คู่มือการเทรด Cryptocurrency ที่ครอบคลุมทั้ง Bitcoin, Ethereum และ Altcoins พร้อมกลยุทธ์การเทรดที่ได้ผลจริง การบริหารความเสี่ยง และการวิเคราะห์ตลาด Crypto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'summary_large_image', NULL, NULL, NULL, NULL, 'Book', NULL, 55, 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800', 799.00, 1499.00, 180, 'PDF', '/ebooks/crypto-trading-strategies.pdf', '/ebooks/preview/crypto-trading-strategies', 1, 'members_only', '[1,2,3]', 5, 0, 0.00, 0, 890, 3216, 1, '2025-11-25 20:57:37', '2025-11-25 21:58:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `email_campaigns`
--

CREATE TABLE `email_campaigns` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('newsletter','promotional','transactional','automated') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `preview_text` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reply_to` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `html_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `plain_text_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `template_id` bigint UNSIGNED DEFAULT NULL,
  `target_audience` enum('all','segment','individual') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `segment_filter` json DEFAULT NULL,
  `recipient_count` int NOT NULL DEFAULT '0',
  `schedule_type` enum('immediate','scheduled','automated') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'immediate',
  `scheduled_at` timestamp NULL DEFAULT NULL,
  `automation_trigger` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('draft','scheduled','sending','sent','failed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `sent_count` int NOT NULL DEFAULT '0',
  `delivered_count` int NOT NULL DEFAULT '0',
  `opened_count` int NOT NULL DEFAULT '0',
  `clicked_count` int NOT NULL DEFAULT '0',
  `bounced_count` int NOT NULL DEFAULT '0',
  `unsubscribed_count` int NOT NULL DEFAULT '0',
  `is_ab_test` tinyint(1) NOT NULL DEFAULT '0',
  `ab_test_variant` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sent_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `email_templates`
--

CREATE TABLE `email_templates` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` enum('welcome','promotional','transactional','newsletter') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `html_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `plain_text_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `available_variables` json DEFAULT NULL,
  `thumbnail_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_default` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `enrollments`
--

CREATE TABLE `enrollments` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `course_id` bigint UNSIGNED NOT NULL,
  `coupon_id` bigint UNSIGNED DEFAULT NULL,
  `enrollment_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `completion_date` timestamp NULL DEFAULT NULL,
  `status` enum('pending','active','completed','cancelled') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `payment_status` enum('pending','paid','refunded') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `progress_percentage` decimal(5,2) NOT NULL DEFAULT '0.00',
  `original_price` decimal(10,2) NOT NULL,
  `final_price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expert_advisors`
--

CREATE TABLE `expert_advisors` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `original_price` decimal(10,2) DEFAULT NULL,
  `platform` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'MT4',
  `features` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `strategy` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `download_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `average_rating` decimal(3,2) NOT NULL DEFAULT '0.00',
  `reviews_count` int NOT NULL DEFAULT '0',
  `downloads_count` int NOT NULL DEFAULT '0',
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `expert_advisors`
--

INSERT INTO `expert_advisors` (`id`, `slug`, `title`, `description`, `image`, `price`, `original_price`, `platform`, `features`, `strategy`, `download_link`, `is_published`, `is_featured`, `average_rating`, `reviews_count`, `downloads_count`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'trend-master-ea-pro', 'Trend Master EA Pro', 'Expert Advisor ที่ใช้กลยุทธ์ตามเทรนด์ เหมาะสำหรับการเทรด Forex ในตลาดที่มีแนวโน้มชัดเจน รองรับทั้ง MT4 และ MT5', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800', 2990.00, 4990.00, 'MT4/MT5', '[\"\\u0e23\\u0e30\\u0e1a\\u0e1a\\u0e27\\u0e34\\u0e40\\u0e04\\u0e23\\u0e32\\u0e30\\u0e2b\\u0e4c\\u0e40\\u0e17\\u0e23\\u0e19\\u0e14\\u0e4c\\u0e2d\\u0e31\\u0e15\\u0e42\\u0e19\\u0e21\\u0e31\\u0e15\\u0e34\",\"Stop Loss \\u0e41\\u0e25\\u0e30 Take Profit \\u0e17\\u0e35\\u0e48\\u0e1b\\u0e23\\u0e31\\u0e1a\\u0e44\\u0e14\\u0e49\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a\\u0e01\\u0e32\\u0e23\\u0e40\\u0e17\\u0e23\\u0e14\\u0e2b\\u0e25\\u0e32\\u0e22\\u0e04\\u0e39\\u0e48\\u0e2a\\u0e01\\u0e38\\u0e25\\u0e40\\u0e07\\u0e34\\u0e19\",\"\\u0e23\\u0e30\\u0e1a\\u0e1a\\u0e1a\\u0e23\\u0e34\\u0e2b\\u0e32\\u0e23\\u0e04\\u0e27\\u0e32\\u0e21\\u0e40\\u0e2a\\u0e35\\u0e48\\u0e22\\u0e07 Money Management\",\"Alert \\u0e41\\u0e08\\u0e49\\u0e07\\u0e40\\u0e15\\u0e37\\u0e2d\\u0e19\\u0e1c\\u0e48\\u0e32\\u0e19 Email \\u0e41\\u0e25\\u0e30 Mobile\",\"Backtesting \\u0e22\\u0e49\\u0e2d\\u0e19\\u0e2b\\u0e25\\u0e31\\u0e07 10 \\u0e1b\\u0e35\"]', 'ใช้ Moving Average Crossover ร่วมกับ RSI และ MACD เพื่อหาจุดเข้าออกที่เหมาะสม', '/downloads/ea/trend-master-ea-pro.ex4', 1, 1, 0.00, 0, 198, 26, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(2, 'scalper-pro-ea', 'Scalper Pro EA', 'EA สำหรับการเทรดแบบ Scalping ทำกำไรจากการเคลื่อนไหวระยะสั้น เหมาะสำหรับคู่สกุลเงินที่มี Spread ต่ำ', 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800', 3990.00, 5990.00, 'MT4', '[\"\\u0e40\\u0e17\\u0e23\\u0e14\\u0e2d\\u0e31\\u0e15\\u0e42\\u0e19\\u0e21\\u0e31\\u0e15\\u0e34 24\\/7\",\"\\u0e43\\u0e0a\\u0e49\\u0e40\\u0e27\\u0e25\\u0e32\\u0e40\\u0e17\\u0e23\\u0e14\\u0e40\\u0e09\\u0e25\\u0e35\\u0e48\\u0e22 2-5 \\u0e19\\u0e32\\u0e17\\u0e35\\u0e15\\u0e48\\u0e2d\\u0e2d\\u0e2d\\u0e40\\u0e14\\u0e2d\\u0e23\\u0e4c\",\"\\u0e23\\u0e30\\u0e1a\\u0e1a Trailing Stop \\u0e41\\u0e1a\\u0e1a Dynamic\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a ECN \\u0e41\\u0e25\\u0e30 Standard Account\",\"Win Rate \\u0e2a\\u0e39\\u0e07\\u0e01\\u0e27\\u0e48\\u0e32 70%\",\"\\u0e1b\\u0e23\\u0e31\\u0e1a\\u0e41\\u0e15\\u0e48\\u0e07\\u0e1e\\u0e32\\u0e23\\u0e32\\u0e21\\u0e34\\u0e40\\u0e15\\u0e2d\\u0e23\\u0e4c\\u0e44\\u0e14\\u0e49\\u0e07\\u0e48\\u0e32\\u0e22\"]', 'ใช้ Price Action และ Support/Resistance ระยะสั้นในการหาจุดเข้า', '/downloads/ea/scalper-pro-ea.ex4', 1, 1, 0.00, 0, 92, 28, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(3, 'grid-trading-ea', 'Grid Trading EA', 'Expert Advisor ที่ใช้กลยุทธ์ Grid Trading เหมาะสำหรับตลาดที่เคลื่อนไหวในกรอบ (Range Market)', 'https://images.unsplash.com/photo-1642543348745-03609d6e9223?w=800', 1990.00, 3990.00, 'MT5', '[\"\\u0e23\\u0e30\\u0e1a\\u0e1a Grid \\u0e41\\u0e1a\\u0e1a Dynamic\",\"\\u0e1b\\u0e23\\u0e31\\u0e1a\\u0e23\\u0e30\\u0e22\\u0e30\\u0e2b\\u0e48\\u0e32\\u0e07 Grid \\u0e2d\\u0e31\\u0e15\\u0e42\\u0e19\\u0e21\\u0e31\\u0e15\\u0e34\",\"\\u0e23\\u0e30\\u0e1a\\u0e1a Hedging \\u0e1b\\u0e49\\u0e2d\\u0e07\\u0e01\\u0e31\\u0e19\\u0e04\\u0e27\\u0e32\\u0e21\\u0e40\\u0e2a\\u0e35\\u0e48\\u0e22\\u0e07\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a\\u0e2b\\u0e25\\u0e32\\u0e22\\u0e04\\u0e39\\u0e48\\u0e2a\\u0e01\\u0e38\\u0e25\\u0e40\\u0e07\\u0e34\\u0e19\",\"\\u0e15\\u0e31\\u0e49\\u0e07\\u0e04\\u0e48\\u0e32 Max Drawdown \\u0e44\\u0e14\\u0e49\",\"Dashboard \\u0e41\\u0e2a\\u0e14\\u0e07\\u0e2a\\u0e16\\u0e34\\u0e15\\u0e34\\u0e41\\u0e1a\\u0e1a Real-time\"]', 'วางออเดอร์แบบ Grid ทั้งขาขึ้นและขาลง รอรับกำไรจากการเคลื่อนไหวในกรอบ', '/downloads/ea/grid-trading-ea.ex4', 1, 0, 0.00, 0, 389, 25, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(4, 'breakout-hunter-ea', 'Breakout Hunter EA', 'EA ที่เชี่ยวชาญในการจับ Breakout จากแนวรับแนวต้าน เหมาะสำหรับช่วงที่มีข่าวเศรษฐกิจสำคัญ', 'https://images.unsplash.com/photo-1642790595397-7047dc98fa72?w=800', 2490.00, 3990.00, 'MT4/MT5', '[\"\\u0e23\\u0e30\\u0e1a\\u0e1a\\u0e15\\u0e23\\u0e27\\u0e08\\u0e08\\u0e31\\u0e1a Breakout \\u0e41\\u0e1a\\u0e1a Real-time\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a Pending Order\",\"\\u0e23\\u0e30\\u0e1a\\u0e1a\\u0e01\\u0e23\\u0e2d\\u0e07 False Breakout\",\"News Filter \\u0e2b\\u0e25\\u0e35\\u0e01\\u0e40\\u0e25\\u0e35\\u0e48\\u0e22\\u0e07\\u0e02\\u0e48\\u0e32\\u0e27\\u0e2a\\u0e33\\u0e04\\u0e31\\u0e0d\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a Partial Close\",\"Backtesting \\u0e1c\\u0e48\\u0e32\\u0e19\\u0e01\\u0e32\\u0e23\\u0e17\\u0e14\\u0e2a\\u0e2d\\u0e1a\\u0e21\\u0e32\\u0e01\\u0e01\\u0e27\\u0e48\\u0e32 5 \\u0e1b\\u0e35\"]', 'ใช้ Bollinger Bands และ ATR ในการหาจุด Breakout ที่มีโอกาสสำเร็จสูง', '/downloads/ea/breakout-hunter-ea.ex4', 1, 0, 0.00, 0, 485, 26, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(5, 'news-trading-ea', 'News Trading EA', 'EA พิเศษสำหรับการเทรดตามข่าวเศรษฐกิจ ใช้ประโยชน์จากความผันผวนสูงในช่วงออกข่าว', 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800', 3490.00, 5990.00, 'MT4', '[\"\\u0e1b\\u0e0f\\u0e34\\u0e17\\u0e34\\u0e19\\u0e02\\u0e48\\u0e32\\u0e27\\u0e40\\u0e28\\u0e23\\u0e29\\u0e10\\u0e01\\u0e34\\u0e08\\u0e43\\u0e19\\u0e15\\u0e31\\u0e27\",\"\\u0e40\\u0e17\\u0e23\\u0e14\\u0e2d\\u0e31\\u0e15\\u0e42\\u0e19\\u0e21\\u0e31\\u0e15\\u0e34\\u0e40\\u0e21\\u0e37\\u0e48\\u0e2d\\u0e21\\u0e35\\u0e02\\u0e48\\u0e32\\u0e27\\u0e2a\\u0e33\\u0e04\\u0e31\\u0e0d\",\"\\u0e23\\u0e30\\u0e1a\\u0e1a Pending Order \\u0e41\\u0e1a\\u0e1a Straddle\",\"\\u0e15\\u0e31\\u0e49\\u0e07\\u0e04\\u0e48\\u0e32\\u0e02\\u0e48\\u0e32\\u0e27\\u0e17\\u0e35\\u0e48\\u0e15\\u0e49\\u0e2d\\u0e07\\u0e01\\u0e32\\u0e23\\u0e40\\u0e17\\u0e23\\u0e14\\u0e44\\u0e14\\u0e49\",\"\\u0e23\\u0e30\\u0e1a\\u0e1a\\u0e1b\\u0e49\\u0e2d\\u0e07\\u0e01\\u0e31\\u0e19 Slippage\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a High Impact News\"]', 'วาง Pending Order ทั้งสองทิศทางก่อนออกข่าว รอรับกำไรจากการเคลื่อนไหวรุนแรง', '/downloads/ea/news-trading-ea.ex4', 1, 0, 0.00, 0, 378, 26, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `indicators`
--

CREATE TABLE `indicators` (
  `id` bigint UNSIGNED NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `original_price` decimal(10,2) DEFAULT NULL,
  `platform` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `features` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `download_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL DEFAULT '0',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `average_rating` decimal(3,2) NOT NULL DEFAULT '0.00',
  `reviews_count` int NOT NULL DEFAULT '0',
  `downloads_count` int NOT NULL DEFAULT '0',
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `indicators`
--

INSERT INTO `indicators` (`id`, `slug`, `title`, `description`, `image`, `price`, `original_price`, `platform`, `features`, `download_link`, `is_published`, `is_featured`, `average_rating`, `reviews_count`, `downloads_count`, `category_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'smart-trend-indicator', 'Smart Trend Indicator', 'อินดิเคเตอร์วิเคราะห์เทรนด์อัจฉริยะ แสดงทิศทางเทรนด์และความแรงของเทรนด์แบบ Real-time', 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800', 990.00, 1990.00, 'MT4/MT5', '[\"\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e17\\u0e34\\u0e28\\u0e17\\u0e32\\u0e07\\u0e40\\u0e17\\u0e23\\u0e19\\u0e14\\u0e4c\\u0e14\\u0e49\\u0e27\\u0e22\\u0e2a\\u0e35\\u0e2a\\u0e31\\u0e19\",\"\\u0e27\\u0e31\\u0e14\\u0e04\\u0e27\\u0e32\\u0e21\\u0e41\\u0e23\\u0e07\\u0e02\\u0e2d\\u0e07\\u0e40\\u0e17\\u0e23\\u0e19\\u0e14\\u0e4c\",\"Alert \\u0e40\\u0e21\\u0e37\\u0e48\\u0e2d\\u0e40\\u0e17\\u0e23\\u0e19\\u0e14\\u0e4c\\u0e40\\u0e1b\\u0e25\\u0e35\\u0e48\\u0e22\\u0e19\",\"\\u0e44\\u0e21\\u0e48 Repaint\",\"\\u0e43\\u0e0a\\u0e49\\u0e07\\u0e32\\u0e19\\u0e07\\u0e48\\u0e32\\u0e22 \\u0e40\\u0e2b\\u0e21\\u0e32\\u0e30\\u0e2a\\u0e33\\u0e2b\\u0e23\\u0e31\\u0e1a\\u0e21\\u0e37\\u0e2d\\u0e43\\u0e2b\\u0e21\\u0e48\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a\\u0e17\\u0e38\\u0e01 Timeframe\"]', '/downloads/indicator/smart-trend-indicator.ex4', 1, 1, 0.00, 0, 658, 24, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(2, 'support-resistance-pro', 'Support & Resistance Pro', 'อินดิเคเตอร์วาดแนวรับแนวต้านอัตโนมัติ พร้อมระบุจุดที่มีโอกาสกลับตัวสูง', 'https://images.unsplash.com/photo-1642543348745-03609d6e9223?w=800', 790.00, 1490.00, 'MT4/MT5', '[\"\\u0e27\\u0e32\\u0e14\\u0e41\\u0e19\\u0e27\\u0e23\\u0e31\\u0e1a\\u0e41\\u0e19\\u0e27\\u0e15\\u0e49\\u0e32\\u0e19\\u0e2d\\u0e31\\u0e15\\u0e42\\u0e19\\u0e21\\u0e31\\u0e15\\u0e34\",\"\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e23\\u0e30\\u0e14\\u0e31\\u0e1a Fibonacci\",\"\\u0e23\\u0e30\\u0e1a\\u0e38 Key Levels \\u0e2a\\u0e33\\u0e04\\u0e31\\u0e0d\",\"Alert \\u0e40\\u0e21\\u0e37\\u0e48\\u0e2d\\u0e23\\u0e32\\u0e04\\u0e32\\u0e43\\u0e01\\u0e25\\u0e49\\u0e41\\u0e19\\u0e27\\u0e23\\u0e31\\u0e1a\\/\\u0e15\\u0e49\\u0e32\\u0e19\",\"\\u0e1b\\u0e23\\u0e31\\u0e1a\\u0e41\\u0e15\\u0e48\\u0e07\\u0e2a\\u0e35\\u0e41\\u0e25\\u0e30\\u0e23\\u0e39\\u0e1b\\u0e41\\u0e1a\\u0e1a\\u0e44\\u0e14\\u0e49\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a\\u0e17\\u0e38\\u0e01\\u0e04\\u0e39\\u0e48\\u0e2a\\u0e01\\u0e38\\u0e25\\u0e40\\u0e07\\u0e34\\u0e19\"]', '/downloads/indicator/support-resistance-pro.ex4', 1, 1, 0.00, 0, 984, 10, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(3, 'volume-profile-indicator', 'Volume Profile Indicator', 'อินดิเคเตอร์แสดง Volume Profile ช่วยวิเคราะห์พื้นที่ที่มีการซื้อขายหนาแน่น', 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800', 1490.00, 2490.00, 'MT5', '[\"\\u0e41\\u0e2a\\u0e14\\u0e07 Volume Profile \\u0e41\\u0e1a\\u0e1a Real-time\",\"\\u0e23\\u0e30\\u0e1a\\u0e38 Point of Control (POC)\",\"\\u0e41\\u0e2a\\u0e14\\u0e07 Value Area High\\/Low\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a Session Volume\",\"\\u0e1b\\u0e23\\u0e31\\u0e1a\\u0e41\\u0e15\\u0e48\\u0e07\\u0e0a\\u0e48\\u0e27\\u0e07\\u0e40\\u0e27\\u0e25\\u0e32\\u0e44\\u0e14\\u0e49\",\"\\u0e40\\u0e2b\\u0e21\\u0e32\\u0e30\\u0e2a\\u0e33\\u0e2b\\u0e23\\u0e31\\u0e1a Day Trading\"]', '/downloads/indicator/volume-profile-indicator.ex4', 1, 0, 0.00, 0, 564, 10, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(4, 'multi-timeframe-dashboard', 'Multi-Timeframe Dashboard', 'Dashboard แสดงข้อมูลจากหลาย Timeframe ในหน้าจอเดียว ช่วยวิเคราะห์ภาพรวมได้รวดเร็ว', 'https://images.unsplash.com/photo-1642790595397-7047dc98fa72?w=800', 1290.00, 2290.00, 'MT4/MT5', '[\"\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e02\\u0e49\\u0e2d\\u0e21\\u0e39\\u0e25 9 Timeframes \\u0e1e\\u0e23\\u0e49\\u0e2d\\u0e21\\u0e01\\u0e31\\u0e19\",\"\\u0e23\\u0e30\\u0e1a\\u0e38\\u0e17\\u0e34\\u0e28\\u0e17\\u0e32\\u0e07\\u0e40\\u0e17\\u0e23\\u0e19\\u0e14\\u0e4c\\u0e41\\u0e15\\u0e48\\u0e25\\u0e30 Timeframe\",\"\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e04\\u0e48\\u0e32 RSI, MACD, Stochastic\",\"Alert \\u0e40\\u0e21\\u0e37\\u0e48\\u0e2d\\u0e2a\\u0e31\\u0e0d\\u0e0d\\u0e32\\u0e13\\u0e15\\u0e23\\u0e07\\u0e01\\u0e31\\u0e19\\u0e2b\\u0e25\\u0e32\\u0e22 TF\",\"\\u0e1b\\u0e23\\u0e31\\u0e1a\\u0e41\\u0e15\\u0e48\\u0e07\\u0e15\\u0e33\\u0e41\\u0e2b\\u0e19\\u0e48\\u0e07\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e1c\\u0e25\\u0e44\\u0e14\\u0e49\",\"\\u0e1b\\u0e23\\u0e30\\u0e2b\\u0e22\\u0e31\\u0e14\\u0e40\\u0e27\\u0e25\\u0e32\\u0e43\\u0e19\\u0e01\\u0e32\\u0e23\\u0e27\\u0e34\\u0e40\\u0e04\\u0e23\\u0e32\\u0e30\\u0e2b\\u0e4c\"]', '/downloads/indicator/multi-timeframe-dashboard.ex4', 1, 1, 0.00, 0, 237, 21, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(5, 'candlestick-pattern-scanner', 'Candlestick Pattern Scanner', 'สแกนหา Candlestick Patterns อัตโนมัติ พร้อมแจ้งเตือนเมื่อพบแพทเทิร์นสำคัญ', 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800', 890.00, 1690.00, 'MT4', '[\"\\u0e2a\\u0e41\\u0e01\\u0e19\\u0e2b\\u0e32 20+ Candlestick Patterns\",\"\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e0a\\u0e37\\u0e48\\u0e2d\\u0e41\\u0e1e\\u0e17\\u0e40\\u0e17\\u0e34\\u0e23\\u0e4c\\u0e19\\u0e1a\\u0e19\\u0e0a\\u0e32\\u0e23\\u0e4c\\u0e15\",\"Alert \\u0e40\\u0e21\\u0e37\\u0e48\\u0e2d\\u0e1e\\u0e1a\\u0e41\\u0e1e\\u0e17\\u0e40\\u0e17\\u0e34\\u0e23\\u0e4c\\u0e19\",\"\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e2a\\u0e16\\u0e34\\u0e15\\u0e34\\u0e04\\u0e27\\u0e32\\u0e21\\u0e41\\u0e21\\u0e48\\u0e19\\u0e22\\u0e33\",\"\\u0e01\\u0e23\\u0e2d\\u0e07\\u0e41\\u0e1e\\u0e17\\u0e40\\u0e17\\u0e34\\u0e23\\u0e4c\\u0e19\\u0e17\\u0e35\\u0e48\\u0e15\\u0e49\\u0e2d\\u0e07\\u0e01\\u0e32\\u0e23\\u0e44\\u0e14\\u0e49\",\"\\u0e40\\u0e2b\\u0e21\\u0e32\\u0e30\\u0e2a\\u0e33\\u0e2b\\u0e23\\u0e31\\u0e1a Price Action Trader\"]', '/downloads/indicator/candlestick-pattern-scanner.ex4', 1, 0, 0.00, 0, 170, 23, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL),
(6, 'tradingview-advanced-signals', 'TradingView Advanced Signals', 'อินดิเคเตอร์สำหรับ TradingView ที่รวมสัญญาณจากหลายตัวชี้วัด ให้สัญญาณที่แม่นยำ', 'https://images.unsplash.com/photo-1642543348745-03609d6e9223?w=800', 1990.00, 3490.00, 'TradingView', '[\"\\u0e23\\u0e27\\u0e21\\u0e2a\\u0e31\\u0e0d\\u0e0d\\u0e32\\u0e13\\u0e08\\u0e32\\u0e01 10+ Indicators\",\"\\u0e41\\u0e2a\\u0e14\\u0e07\\u0e04\\u0e27\\u0e32\\u0e21\\u0e19\\u0e48\\u0e32\\u0e40\\u0e0a\\u0e37\\u0e48\\u0e2d\\u0e16\\u0e37\\u0e2d\\u0e02\\u0e2d\\u0e07\\u0e2a\\u0e31\\u0e0d\\u0e0d\\u0e32\\u0e13\",\"Alert \\u0e1c\\u0e48\\u0e32\\u0e19 TradingView App\",\"\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a Crypto, Forex, Stocks\",\"Backtesting \\u0e43\\u0e19\\u0e15\\u0e31\\u0e27\",\"\\u0e2d\\u0e31\\u0e1e\\u0e40\\u0e14\\u0e17\\u0e1f\\u0e23\\u0e35\\u0e15\\u0e25\\u0e2d\\u0e14\\u0e0a\\u0e35\\u0e1e\"]', '/downloads/indicator/tradingview-advanced-signals.ex4', 1, 1, 0.00, 0, 686, 24, '2025-11-29 02:16:59', '2025-11-29 02:16:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lesson_completions`
--

CREATE TABLE `lesson_completions` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `course_id` bigint UNSIGNED NOT NULL,
  `section_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lesson_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `completed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `video_progress` int NOT NULL DEFAULT '0' COMMENT 'Seconds watched',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lesson_videos`
--

CREATE TABLE `lesson_videos` (
  `id` bigint UNSIGNED NOT NULL,
  `course_id` bigint UNSIGNED NOT NULL,
  `lesson_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video_type` enum('youtube','upload') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'upload',
  `youtube_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_size` bigint UNSIGNED DEFAULT NULL COMMENT 'File size in bytes',
  `duration` int DEFAULT NULL COMMENT 'Duration in seconds',
  `mime_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail_path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('processing','ready','failed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'processing',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `marketing_analytics`
--

CREATE TABLE `marketing_analytics` (
  `id` bigint UNSIGNED NOT NULL,
  `campaign_type` enum('promotion','coupon','popup','sms','email') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `campaign_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `session_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `event_type` enum('view','click','conversion','share') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `event_data` json DEFAULT NULL,
  `page_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `referrer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browser` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint UNSIGNED NOT NULL,
  `disk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'public',
  `directory` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'media',
  `visibility` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'public',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `optimized_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `optimization_status` enum('pending','processing','completed','failed','skipped') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `original_size` bigint UNSIGNED DEFAULT NULL,
  `optimized_size` bigint UNSIGNED DEFAULT NULL,
  `compression_ratio` decimal(5,2) DEFAULT NULL,
  `width` int UNSIGNED DEFAULT NULL,
  `height` int UNSIGNED DEFAULT NULL,
  `size` int UNSIGNED DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'image',
  `ext` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `caption` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `exif` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `curations` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tenant_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_01_01_000000_create_categories_table', 1),
(5, '2024_01_01_000001_create_courses_table', 1),
(6, '2024_01_01_000002_create_articles_table', 1),
(7, '2024_01_01_000003_create_indicators_table', 1),
(8, '2024_01_01_000004_create_ebooks_table', 1),
(9, '2024_01_01_000005_create_expert_advisors_table', 1),
(10, '2025_11_21_031538_create_site_settings_table', 1),
(11, '2025_11_21_033509_add_menu_fields_to_site_settings_table', 1),
(12, '2025_11_21_034628_create_pages_table', 1),
(13, '2025_11_21_074900_create_reviews_table', 1),
(14, '2025_11_21_074901_create_coupons_table', 1),
(15, '2025_11_21_074902_add_rating_fields_to_products_tables', 1),
(16, '2025_11_21_084600_add_seo_fields_to_articles_table', 1),
(17, '2025_11_21_084700_create_article_views_table', 1),
(18, '2025_11_21_101404_add_content_fields_to_courses_table', 1),
(19, '2025_11_22_063314_add_user_enhancements_to_users_table', 1),
(20, '2025_11_22_063315_create_enrollments_table', 1),
(21, '2025_11_22_063315_create_user_profiles_table', 1),
(22, '2025_11_22_063317_create_course_schedules_table', 1),
(23, '2025_11_22_063318_create_bookings_table', 1),
(24, '2025_11_22_063319_create_lesson_completions_table', 1),
(25, '2025_11_22_063320_create_quiz_attempts_table', 1),
(26, '2025_11_22_063321_create_certificates_table', 1),
(27, '2025_11_22_063322_add_seo_fields_to_courses_table', 1),
(28, '2025_11_22_111737_create_permission_tables', 1),
(29, '2025_11_22_113350_create_personal_access_tokens_table', 1),
(30, '2025_11_23_192548_create_media_table', 1),
(31, '2025_11_23_192549_add_tenant_aware_column_to_media_table', 1),
(32, '2025_11_23_194533_add_optimization_fields_to_media_table', 1),
(33, '2025_11_23_201655_add_access_control_to_ebooks_table', 1),
(34, '2025_11_24_000001_create_lesson_videos_table', 1),
(35, '2025_11_24_025925_create_products_table', 1),
(36, '2025_11_24_025926_create_product_screenshots_table', 1),
(37, '2025_11_24_130510_create_promotions_table', 1),
(38, '2025_11_24_130518_create_popups_table', 1),
(39, '2025_11_24_130518_create_sms_campaigns_table', 1),
(40, '2025_11_24_130519_create_email_campaigns_table', 1),
(41, '2025_11_24_130519_create_email_templates_table', 1),
(42, '2025_11_24_130519_create_marketing_analytics_table', 1),
(43, '2025_11_25_000001_enhance_site_settings_table', 1),
(44, '2025_11_25_000002_create_subscription_plans_table', 1),
(45, '2025_11_25_000003_create_user_subscriptions_table', 1),
(46, '2025_11_25_000004_create_payment_settings_table', 1),
(47, '2025_11_25_000005_create_social_accounts_table', 1),
(48, '2025_11_25_000006_create_two_factor_auth_table', 1),
(49, '2025_11_25_000007_create_api_settings_table', 1),
(50, '2025_11_25_000008_create_activity_logs_table', 1),
(51, '2025_11_26_044438_add_seo_fields_to_ebooks_table', 2),
(52, '2025_11_26_172817_update_products_category_enum', 3),
(53, '2025_11_27_020420_create_promotion_user_table', 4),
(54, '2025_11_27_082206_create_verification_codes_table', 5),
(55, '2025_11_27_082209_add_phone_verified_at_to_users_table', 5),
(56, '2025_11_27_082654_create_system_settings_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(4, 'App\\Models\\User', 2),
(5, 'App\\Models\\User', 2),
(4, 'App\\Models\\User', 3),
(4, 'App\\Models\\User', 4),
(4, 'App\\Models\\User', 6);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `custom_css` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `is_home` tinyint(1) NOT NULL DEFAULT '0',
  `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `seo_keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_settings`
--

CREATE TABLE `payment_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_enabled` tinyint(1) NOT NULL DEFAULT '0',
  `configuration` json DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_settings`
--

INSERT INTO `payment_settings` (`id`, `key`, `name`, `is_enabled`, `configuration`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'bank_transfer', 'Bank Transfer (โอนเงินผ่านธนาคาร)', 1, '{\"branch\": \"สาขาสยาม\", \"qr_code\": null, \"bank_name\": \"ธนาคารกสิกรไทย\", \"account_name\": \"LongTrade Academy\", \"instructions\": \"กรุณาโอนเงินและแนบสลิปการโอนเงิน\", \"account_number\": \"123-4-56789-0\"}', 1, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(2, 'promptpay', 'PromptPay', 1, '{\"account_name\": \"LongTrade Academy\", \"instructions\": \"สแกน QR Code เพื่อชำระเงิน\", \"promptpay_id\": \"0812345678\", \"promptpay_type\": \"mobile\"}', 2, '2025-11-24 18:56:09', '2025-11-24 18:56:09'),
(3, 'stripe', 'Credit/Debit Card (Stripe)', 0, '{\"mode\": \"test\", \"currency\": \"thb\", \"secret_key\": \"\", \"webhook_secret\": \"\", \"publishable_key\": \"\"}', 3, '2025-11-24 18:56:09', '2025-11-24 18:56:09');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'view_any_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(2, 'view_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(3, 'create_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(4, 'update_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(5, 'delete_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(6, 'delete_any_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(7, 'force_delete_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(8, 'force_delete_any_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(9, 'restore_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(10, 'restore_any_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(11, 'replicate_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11'),
(12, 'reorder_site::setting', 'web', '2025-11-24 20:09:11', '2025-11-24 20:09:11');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 3, 'auth_token', '6ed302a7275b6dd6bedf4563fdbb45e88c944bc9b0ec62cf4bd1b5c1a1b2d426', '[\"*\"]', NULL, NULL, '2025-11-29 08:32:04', '2025-11-29 08:32:04'),
(3, 'App\\Models\\User', 4, 'auth_token', 'b99839f61e8d61a6bf32a633a9bedea54ba16c822aa15c7403ae0908378c5878', '[\"*\"]', NULL, NULL, '2025-11-29 08:54:59', '2025-11-29 08:54:59'),
(5, 'App\\Models\\User', 6, 'auth_token', '6fc2c0af83b19ec6b4c648acbe9291a775bcdd30b212d80593161267afb2a8c6', '[\"*\"]', NULL, NULL, '2025-12-01 10:36:11', '2025-12-01 10:36:11');

-- --------------------------------------------------------

--
-- Table structure for table `popups`
--

CREATE TABLE `popups` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `trigger_type` enum('page_load','exit_intent','scroll','time_delay','click') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `trigger_value` int DEFAULT NULL,
  `display_type` enum('modal','slide_in','banner','fullscreen') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'modal',
  `position` enum('center','top','bottom','left','right') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'center',
  `width` int NOT NULL DEFAULT '600',
  `height` int DEFAULT NULL,
  `target_pages` json DEFAULT NULL,
  `target_user_type` enum('all','guest','member','new_visitor') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `frequency` enum('always','once_per_session','once_per_day','once_per_week') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'once_per_session',
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_color` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `background_color` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `starts_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `impressions` int NOT NULL DEFAULT '0',
  `clicks` int NOT NULL DEFAULT '0',
  `conversions` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `category` enum('expert_advisors','indicators','scripts','tradingview') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `access_type` enum('free','premium','members_only') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'free',
  `file_path` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_size` bigint DEFAULT NULL,
  `file_version` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requirements` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `installation_guide` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `demo_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail_id` bigint UNSIGNED DEFAULT NULL,
  `featured_image_id` bigint UNSIGNED DEFAULT NULL,
  `downloads_count` int NOT NULL DEFAULT '0',
  `views_count` int NOT NULL DEFAULT '0',
  `rating` decimal(3,2) NOT NULL DEFAULT '0.00',
  `status` enum('draft','published','archived') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `published_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `category`, `price`, `access_type`, `file_path`, `file_size`, `file_version`, `requirements`, `installation_guide`, `demo_url`, `thumbnail_id`, `featured_image_id`, `downloads_count`, `views_count`, `rating`, `status`, `is_featured`, `published_at`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Smart Trend EA Pro', 'smart-trend-ea-pro', 'Expert Advisor ที่ใช้ AI ในการวิเคราะห์เทรนด์และเปิดออเดอร์อัตโนมัติ รองรับทุกคู่เงิน มี Money Management ในตัว พร้อม Stop Loss และ Take Profit อัตโนมัติ', 'expert_advisors', 2999.00, 'premium', '/products/ea/smart-trend-ea-pro.ex4', 524288, '2.5.1', 'MT4 Build 1320+, Windows 10+, VPS แนะนำ', '1. ดาวน์โหลดไฟล์ .ex4\\n2. คัดลอกไปที่ MQL4/Experts\\n3. Restart MT4\\n4. ลาก EA ลงบนชาร์ต\\n5. ตั้งค่าตามคู่มือ', 'https://demo.longtrade.com/smart-trend-ea', NULL, NULL, 450, 2342, 4.70, 'published', 1, '2025-11-25 23:36:31', '2025-11-25 23:36:31', '2025-11-26 10:59:08', NULL),
(2, 'RSI Divergence Indicator', 'rsi-divergence-indicator', 'อินดิเคเตอร์ RSI ที่ตรวจจับ Divergence อัตโนมัติ แสดงสัญญาณซื้อขายที่แม่นยำ พร้อม Alert เสียงและ Push Notification รองรับทุก Timeframe', 'indicators', 0.00, 'free', '/products/indicators/rsi-divergence.ex4', 102400, '1.8.0', 'MT4/MT5, ทุก OS', '1. ดาวน์โหลดไฟล์\\n2. คัดลอกไปที่ MQL4/Indicators\\n3. Restart MT4\\n4. ลากลงบนชาร์ต', 'https://demo.longtrade.com/rsi-divergence', NULL, NULL, 1850, 5426, 4.90, 'published', 1, '2025-11-25 23:38:44', '2025-11-25 23:38:44', '2025-12-01 10:50:20', NULL),
(3, 'TradingView Pine Script - MACD Strategy', 'tradingview-macd-strategy', 'Pine Script Strategy สำหรับ TradingView ใช้ MACD ร่วมกับ Volume Profile เพื่อหาจุดเข้าออกที่แม่นยำ Backtest ผ่าน 5 ปี Win Rate 68% พร้อม Alert และ Webhook', 'tradingview', 1499.00, 'members_only', '/products/tradingview/macd-strategy.pine', 15360, '3.2.0', 'TradingView Pro+, Pine Script v5', '1. เปิด TradingView\\n2. คลิก Pine Editor\\n3. Copy code และ Paste\\n4. Save และ Add to Chart', 'https://www.tradingview.com/script/longtrade-macd', NULL, NULL, 680, 3132, 4.60, 'published', 0, '2025-11-26 10:45:37', '2025-11-26 10:45:37', '2025-12-01 03:28:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_screenshots`
--

CREATE TABLE `product_screenshots` (
  `id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `media_id` bigint UNSIGNED NOT NULL,
  `order` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `type` enum('flash_sale','bundle','seasonal','member_exclusive') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_type` enum('percentage','fixed_amount','buy_x_get_y') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_value` decimal(10,2) NOT NULL,
  `max_discount_amount` decimal(10,2) DEFAULT NULL,
  `min_purchase_amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `applicable_to` enum('all','categories','products','courses') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `applicable_ids` json DEFAULT NULL,
  `starts_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `usage_limit` int DEFAULT NULL,
  `usage_per_user` int NOT NULL DEFAULT '1',
  `current_usage` int NOT NULL DEFAULT '0',
  `banner_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge_text` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge_color` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `promotions`
--

INSERT INTO `promotions` (`id`, `name`, `slug`, `description`, `type`, `discount_type`, `discount_value`, `max_discount_amount`, `min_purchase_amount`, `applicable_to`, `applicable_ids`, `starts_at`, `ends_at`, `is_active`, `usage_limit`, `usage_per_user`, `current_usage`, `banner_image`, `badge_text`, `badge_color`, `priority`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Flash Sale Weekend Special', 'flash-sale-weekend', 'ลดราคาพิเศษสุดสัปดาห์! รับส่วนลดทันที 20% สำหรับทุกสินค้า ช้อปเลย ก่อนหมดเวลา!', 'flash_sale', 'percentage', 20.00, 500.00, 1000.00, 'all', NULL, '2025-11-27 17:00:00', '2025-11-30 16:59:59', 1, 100, 1, 1, NULL, 'FLASH SALE 20%', 'red', 10, '2025-11-26 11:08:13', '2025-11-26 19:08:35', NULL),
(2, 'Bundle Deal - Complete Trader Package', 'bundle-trader-package', 'ซื้อครบ 5,000 บาท รับส่วนลดทันที 1,000 บาท! เหมาะสำหรับการซื้อคอร์สเรียน E-book และเครื่องมือเทรดพร้อมกัน', 'bundle', 'fixed_amount', 1000.00, NULL, 5000.00, 'all', NULL, '2025-11-26 11:08:13', '2025-12-26 11:08:13', 1, 50, 1, 1, NULL, 'BUNDLE SAVE ฿1,000', 'blue', 5, '2025-11-26 11:08:13', '2025-11-26 19:10:45', NULL),
(3, 'VIP Member Exclusive Discount', 'vip-member-exclusive', 'สิทธิพิเศษสำหรับสมาชิก VIP! รับส่วนลด 15% ทุกครั้งที่ซื้อ ใช้ได้สูงสุด 3 ครั้งต่อคน', 'member_exclusive', 'percentage', 15.00, 1500.00, 2000.00, 'all', NULL, '2025-11-26 11:08:13', NULL, 1, NULL, 3, 0, NULL, 'VIP 15% OFF', 'gold', 7, '2025-11-26 11:08:13', '2025-11-26 11:08:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `promotion_user`
--

CREATE TABLE `promotion_user` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `promotion_id` bigint UNSIGNED NOT NULL,
  `usage_count` int NOT NULL DEFAULT '1',
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `order_amount` decimal(10,2) DEFAULT NULL,
  `used_at` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `promotion_user`
--

INSERT INTO `promotion_user` (`id`, `user_id`, `promotion_id`, `usage_count`, `discount_amount`, `order_amount`, `used_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 300.00, 2000.00, '2025-11-26 19:08:35', '2025-11-26 19:08:35', '2025-11-26 19:08:35'),
(2, 1, 2, 1, 1000.00, 5000.00, '2025-11-26 19:10:45', '2025-11-26 19:10:45', '2025-11-26 19:10:45');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_attempts`
--

CREATE TABLE `quiz_attempts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `course_id` bigint UNSIGNED NOT NULL,
  `score` int NOT NULL,
  `total_questions` int NOT NULL,
  `percentage` decimal(5,2) NOT NULL,
  `passed` tinyint(1) NOT NULL DEFAULT '0',
  `answers` json NOT NULL,
  `attempted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint UNSIGNED NOT NULL,
  `reviewable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reviewable_id` bigint UNSIGNED NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` tinyint UNSIGNED NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `is_approved` tinyint(1) NOT NULL DEFAULT '0',
  `is_verified_purchase` tinyint(1) NOT NULL DEFAULT '0',
  `ip_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `approved_at` timestamp NULL DEFAULT NULL,
  `approved_by` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'super_admin', 'web', '2025-11-24 20:12:25', '2025-11-24 20:12:25'),
(2, 'admin', 'web', '2025-11-26 20:16:57', '2025-11-26 20:16:57'),
(3, 'instructor', 'web', '2025-11-26 20:16:57', '2025-11-26 20:16:57'),
(4, 'student', 'web', '2025-11-26 20:16:57', '2025-11-26 20:16:57'),
(5, 'vip_member', 'web', '2025-11-26 20:16:57', '2025-11-26 20:16:57');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('sEjuVhgpm0ECzFrzj30szdYmIcDWBEoFTqIMOsKw', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoibVh6T2g4SW5aZFB3Y0c3RWFZZVJtR0poSm1tMzh4UGxxWFVtQ1NuOCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZG1pbi9jb3Vyc2VzIjtzOjU6InJvdXRlIjtzOjM4OiJmaWxhbWVudC5hZG1pbi5yZXNvdXJjZXMuY291cnNlcy5pbmRleCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMiQxeDU2Rk4uOHh1ZnpKMWxUZnVBcEZ1Zml2Ui50cmlzbks2RGlFM2xIa3RjOWtFeC44ZlQzcSI7fQ==', 1765177092);

-- --------------------------------------------------------

--
-- Table structure for table `site_settings`
--

CREATE TABLE `site_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `site_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'LongTrade Academy',
  `site_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `favicon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `contact_line` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_twitter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_instagram` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_youtube` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `business_hours` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tax_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `facebook_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `line_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tiktok_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `header_menu` json DEFAULT NULL,
  `header_style` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `header_colors` json DEFAULT NULL,
  `footer_menu` json DEFAULT NULL,
  `cta_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'สอบถามข้อมูล',
  `cta_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `footer_columns` json DEFAULT NULL,
  `footer_social_links` json DEFAULT NULL,
  `footer_style` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `footer_colors` json DEFAULT NULL,
  `theme_colors` json DEFAULT NULL,
  `theme_font_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Inter',
  `theme_font_body` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Inter',
  `theme_layout` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `theme_dark_mode` tinyint(1) NOT NULL DEFAULT '1',
  `theme_glassmorphism` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sms_campaigns`
--

CREATE TABLE `sms_campaigns` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('promotional','transactional','notification') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sender_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `target_audience` enum('all','segment','individual') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'all',
  `segment_filter` json DEFAULT NULL,
  `recipient_count` int NOT NULL DEFAULT '0',
  `schedule_type` enum('immediate','scheduled','recurring') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'immediate',
  `scheduled_at` timestamp NULL DEFAULT NULL,
  `recurrence_pattern` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('draft','scheduled','sending','sent','failed') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'draft',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `sent_count` int NOT NULL DEFAULT '0',
  `delivered_count` int NOT NULL DEFAULT '0',
  `failed_count` int NOT NULL DEFAULT '0',
  `clicked_count` int NOT NULL DEFAULT '0',
  `estimated_cost` decimal(10,2) DEFAULT NULL,
  `actual_cost` decimal(10,2) DEFAULT NULL,
  `sent_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `social_accounts`
--

CREATE TABLE `social_accounts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `provider` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `provider_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider_refresh_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token_expires_at` timestamp NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider_data` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscription_plans`
--

CREATE TABLE `subscription_plans` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `billing_cycle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'monthly',
  `trial_days` int NOT NULL DEFAULT '0',
  `features` json DEFAULT NULL,
  `limitations` json DEFAULT NULL,
  `max_courses` int DEFAULT NULL,
  `max_downloads_per_month` int DEFAULT NULL,
  `max_ebooks` int DEFAULT NULL,
  `max_products` int DEFAULT NULL,
  `ai_chat_access` tinyint(1) NOT NULL DEFAULT '0',
  `ai_messages_per_month` int DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `is_popular` tinyint(1) NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `badge_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `badge_color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscription_plans`
--

INSERT INTO `subscription_plans` (`id`, `name`, `slug`, `description`, `price`, `billing_cycle`, `trial_days`, `features`, `limitations`, `max_courses`, `max_downloads_per_month`, `max_ebooks`, `max_products`, `ai_chat_access`, `ai_messages_per_month`, `sort_order`, `is_popular`, `is_active`, `badge_text`, `badge_color`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Free', 'free', 'เริ่มต้นเรียนรู้การเทรดฟรี', 0.00, 'lifetime', 0, '[\"เข้าถึงคอร์สฟรี\", \"บทความพื้นฐาน\", \"ชุมชนผู้เรียน\"]', '{\"course_limit\": 3, \"download_limit\": 5}', 3, 5, 2, 0, 0, 0, 1, 0, 1, NULL, NULL, '2025-11-24 19:07:42', '2025-11-24 19:07:42', NULL),
(2, 'Basic', 'basic', 'เหมาะสำหรับผู้เริ่มต้นที่จริงจัง', 499.00, 'monthly', 7, '[\"เข้าถึงคอร์สทั้งหมด\", \"บทความและ E-books\", \"ดาวน์โหลด Indicators\", \"การสนับสนุนทางอีเมล\"]', '{\"course_limit\": 10, \"download_limit\": 20}', 10, 20, 10, 5, 1, 50, 2, 0, 1, NULL, NULL, '2025-11-24 19:07:42', '2025-11-24 19:07:42', NULL),
(3, 'Premium', 'premium', 'สำหรับเทรดเดอร์มืออาชีพ', 1499.00, 'monthly', 14, '[\"เข้าถึงคอร์สทั้งหมดไม่จำกัด\", \"บทความและ E-books ทั้งหมด\", \"ดาวน์โหลด Indicators & EA\", \"AI Trading Assistant\", \"การสนับสนุนแบบ Priority\", \"เข้าร่วม Webinar พิเศษ\"]', '[]', NULL, NULL, NULL, NULL, 1, 200, 3, 1, 1, 'Most Popular', '#10B981', '2025-11-24 19:07:42', '2025-11-24 19:07:42', NULL),
(4, 'Enterprise', 'enterprise', 'สำหรับองค์กรและทีมเทรดเดอร์', 4999.00, 'monthly', 30, '[\"ทุกอย่างใน Premium\", \"Multi-user accounts (สูงสุด 10 คน)\", \"Custom indicators & EA\", \"AI Trading Assistant ไม่จำกัด\", \"การสนับสนุนแบบ 24/7\", \"Private training sessions\", \"API Access\"]', '[]', NULL, NULL, NULL, NULL, 1, NULL, 4, 0, 1, 'Best Value', '#8B5CF6', '2025-11-24 19:07:42', '2025-11-24 19:07:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `system_settings`
--

CREATE TABLE `system_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'string',
  `group` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'general',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `two_factor_auth`
--

CREATE TABLE `two_factor_auth` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  `secret` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recovery_codes` json DEFAULT NULL,
  `enabled_at` timestamp NULL DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `role` enum('student','instructor','admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'student',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `avatar`, `role`, `email_verified_at`, `phone_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@longtrade.com', NULL, NULL, 'student', NULL, NULL, '$2y$12$1x56FN.8xufzJ1lTfuApFufivR.trisnK6DiE3lHktc9kEx.8fT3q', 'IKgfavBvudSMSqewfnYGeGrrj7CkUHQV9bxMOYfVVZotZg7TOSkZoNXBHyBQ', '2025-11-24 19:16:45', '2025-12-07 23:57:03'),
(2, 'User', 'user01@longtrade.com', '0123456789', NULL, 'student', NULL, NULL, '$2y$12$/A50DRkjWX0I8sQuN.ow0ODC6GGR5985znXHLmfduyrL63.AloClO', NULL, '2025-11-27 00:16:50', '2025-11-27 00:16:50'),
(3, 'Test User', 'testuser@longtrade.com', '0812345678', NULL, 'student', NULL, NULL, '$2y$12$Dk30ItWN5ZJvKq9R/NdneOWNDGT8qIag2e.sVsUn.8.mS.IHX1z8q', NULL, '2025-11-29 08:32:04', '2025-11-29 08:32:04'),
(4, 'Test User', 'testuser@example.com', NULL, NULL, 'student', NULL, NULL, '$2y$12$MX8bET00aUEvxDDI6pK/8.0GDIf5K4P3Gl6nA/n5de6LguB4pulaO', NULL, '2025-11-29 08:54:46', '2025-11-29 08:54:46'),
(5, 'Test User', 'test@example.com', NULL, NULL, 'student', '2025-12-01 03:21:33', NULL, '$2y$12$N./ylzJcs5uxhXsGVvHGReo0VlEwzDj/4C9a769KVkk8duAsgxNO2', 'ZQFkSgX2eI', '2025-12-01 03:21:34', '2025-12-01 03:21:34'),
(6, 'Test User API', 'testapi@example.com', '0812345678', NULL, 'student', NULL, NULL, '$2y$12$XwxS3SCsS4/qwwSxZDesMu.n9V25HfvIVYXX4r1EkRXLhFrvs.7g2', NULL, '2025-12-01 10:36:10', '2025-12-01 10:36:10');

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE `user_profiles` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `bio` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Thailand',
  `interests` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_subscriptions`
--

CREATE TABLE `user_subscriptions` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `subscription_plan_id` bigint UNSIGNED NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `started_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` timestamp NULL DEFAULT NULL,
  `cancelled_at` timestamp NULL DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `payment_id` bigint UNSIGNED DEFAULT NULL,
  `amount_paid` decimal(10,2) NOT NULL DEFAULT '0.00',
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_reference` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auto_renew` tinyint(1) NOT NULL DEFAULT '0',
  `stripe_subscription_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `usage_stats` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `verification_codes`
--

CREATE TABLE `verification_codes` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `type` enum('email','phone') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires_at` timestamp NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `verified_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_logs_user_id_foreign` (`user_id`),
  ADD KEY `activity_logs_log_name_index` (`log_name`),
  ADD KEY `activity_logs_subject_type_subject_id_index` (`subject_type`,`subject_id`),
  ADD KEY `activity_logs_causer_type_causer_id_index` (`causer_type`,`causer_id`),
  ADD KEY `activity_logs_created_at_index` (`created_at`);

--
-- Indexes for table `api_settings`
--
ALTER TABLE `api_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `api_settings_key_unique` (`key`),
  ADD KEY `api_settings_category_is_active_index` (`category`,`is_active`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articles_slug_unique` (`slug`),
  ADD KEY `articles_category_id_foreign` (`category_id`),
  ADD KEY `articles_seo_score_index` (`seo_score`),
  ADD KEY `articles_focus_keyword_index` (`focus_keyword`);

--
-- Indexes for table `article_views`
--
ALTER TABLE `article_views`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_views_user_id_foreign` (`user_id`),
  ADD KEY `article_views_article_id_index` (`article_id`),
  ADD KEY `article_views_viewed_at_index` (`viewed_at`),
  ADD KEY `article_views_article_id_viewed_at_index` (`article_id`,`viewed_at`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indexes for table `certificates`
--
ALTER TABLE `certificates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `certificates_certificate_number_unique` (`certificate_number`),
  ADD UNIQUE KEY `certificates_verification_code_unique` (`verification_code`),
  ADD KEY `certificates_user_id_foreign` (`user_id`),
  ADD KEY `certificates_course_id_foreign` (`course_id`),
  ADD KEY `certificates_enrollment_id_foreign` (`enrollment_id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `coupons_code_unique` (`code`),
  ADD KEY `coupons_code_index` (`code`),
  ADD KEY `coupons_is_active_index` (`is_active`),
  ADD KEY `coupons_valid_from_valid_until_index` (`valid_from`,`valid_until`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courses_slug_unique` (`slug`),
  ADD KEY `courses_category_id_foreign` (`category_id`);

--
-- Indexes for table `course_schedules`
--
ALTER TABLE `course_schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ebooks`
--
ALTER TABLE `ebooks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ebooks_slug_unique` (`slug`),
  ADD KEY `ebooks_category_id_foreign` (`category_id`),
  ADD KEY `ebooks_seo_score_index` (`seo_score`),
  ADD KEY `ebooks_focus_keyword_index` (`focus_keyword`);

--
-- Indexes for table `email_campaigns`
--
ALTER TABLE `email_campaigns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email_campaigns_status_index` (`status`),
  ADD KEY `email_campaigns_type_index` (`type`);

--
-- Indexes for table `email_templates`
--
ALTER TABLE `email_templates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email_templates_category_index` (`category`);

--
-- Indexes for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `enrollments_user_id_course_id_unique` (`user_id`,`course_id`),
  ADD KEY `enrollments_course_id_foreign` (`course_id`),
  ADD KEY `enrollments_coupon_id_foreign` (`coupon_id`);

--
-- Indexes for table `expert_advisors`
--
ALTER TABLE `expert_advisors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `expert_advisors_slug_unique` (`slug`),
  ADD KEY `expert_advisors_category_id_foreign` (`category_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `indicators`
--
ALTER TABLE `indicators`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `indicators_slug_unique` (`slug`),
  ADD KEY `indicators_category_id_foreign` (`category_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lesson_completions`
--
ALTER TABLE `lesson_completions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lesson_completions_user_id_course_id_lesson_id_unique` (`user_id`,`course_id`,`lesson_id`),
  ADD KEY `lesson_completions_course_id_foreign` (`course_id`);

--
-- Indexes for table `lesson_videos`
--
ALTER TABLE `lesson_videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lesson_videos_course_id_lesson_id_index` (`course_id`,`lesson_id`),
  ADD KEY `lesson_videos_status_index` (`status`);

--
-- Indexes for table `marketing_analytics`
--
ALTER TABLE `marketing_analytics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marketing_analytics_campaign_type_campaign_id_index` (`campaign_type`,`campaign_id`),
  ADD KEY `marketing_analytics_user_id_index` (`user_id`),
  ADD KEY `marketing_analytics_event_type_index` (`event_type`),
  ADD KEY `marketing_analytics_created_at_index` (`created_at`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payment_settings`
--
ALTER TABLE `payment_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_settings_key_unique` (`key`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `popups`
--
ALTER TABLE `popups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `popups_is_active_index` (`is_active`),
  ADD KEY `popups_trigger_type_index` (`trigger_type`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_slug_unique` (`slug`),
  ADD KEY `products_thumbnail_id_foreign` (`thumbnail_id`),
  ADD KEY `products_featured_image_id_foreign` (`featured_image_id`),
  ADD KEY `products_category_index` (`category`),
  ADD KEY `products_access_type_index` (`access_type`),
  ADD KEY `products_status_index` (`status`),
  ADD KEY `products_is_featured_index` (`is_featured`),
  ADD KEY `products_published_at_index` (`published_at`);

--
-- Indexes for table `product_screenshots`
--
ALTER TABLE `product_screenshots`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_screenshots_media_id_foreign` (`media_id`),
  ADD KEY `product_screenshots_product_id_index` (`product_id`),
  ADD KEY `product_screenshots_order_index` (`order`);

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `promotions_slug_unique` (`slug`),
  ADD KEY `promotions_type_index` (`type`),
  ADD KEY `promotions_is_active_index` (`is_active`),
  ADD KEY `promotions_starts_at_ends_at_index` (`starts_at`,`ends_at`);

--
-- Indexes for table `promotion_user`
--
ALTER TABLE `promotion_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `promotion_user_promotion_id_foreign` (`promotion_id`),
  ADD KEY `promotion_user_user_id_promotion_id_index` (`user_id`,`promotion_id`),
  ADD KEY `promotion_user_used_at_index` (`used_at`);

--
-- Indexes for table `quiz_attempts`
--
ALTER TABLE `quiz_attempts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quiz_attempts_user_id_foreign` (`user_id`),
  ADD KEY `quiz_attempts_course_id_foreign` (`course_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_reviewable_type_reviewable_id_index` (`reviewable_type`,`reviewable_id`),
  ADD KEY `reviews_approved_by_foreign` (`approved_by`),
  ADD KEY `reviews_rating_index` (`rating`),
  ADD KEY `reviews_is_approved_index` (`is_approved`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `site_settings`
--
ALTER TABLE `site_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sms_campaigns`
--
ALTER TABLE `sms_campaigns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sms_campaigns_status_index` (`status`),
  ADD KEY `sms_campaigns_type_index` (`type`);

--
-- Indexes for table `social_accounts`
--
ALTER TABLE `social_accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `social_accounts_user_id_provider_unique` (`user_id`,`provider`),
  ADD KEY `social_accounts_provider_id_index` (`provider_id`);

--
-- Indexes for table `subscription_plans`
--
ALTER TABLE `subscription_plans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subscription_plans_slug_unique` (`slug`);

--
-- Indexes for table `system_settings`
--
ALTER TABLE `system_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `system_settings_key_unique` (`key`),
  ADD KEY `system_settings_group_index` (`group`),
  ADD KEY `system_settings_key_index` (`key`);

--
-- Indexes for table `two_factor_auth`
--
ALTER TABLE `two_factor_auth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `two_factor_auth_user_id_unique` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_profiles_user_id_foreign` (`user_id`);

--
-- Indexes for table `user_subscriptions`
--
ALTER TABLE `user_subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_subscriptions_subscription_plan_id_foreign` (`subscription_plan_id`),
  ADD KEY `user_subscriptions_user_id_status_index` (`user_id`,`status`),
  ADD KEY `user_subscriptions_expires_at_index` (`expires_at`);

--
-- Indexes for table `verification_codes`
--
ALTER TABLE `verification_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `verification_codes_user_id_type_index` (`user_id`,`type`),
  ADD KEY `verification_codes_code_index` (`code`),
  ADD KEY `verification_codes_expires_at_index` (`expires_at`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `api_settings`
--
ALTER TABLE `api_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `article_views`
--
ALTER TABLE `article_views`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `certificates`
--
ALTER TABLE `certificates`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `course_schedules`
--
ALTER TABLE `course_schedules`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ebooks`
--
ALTER TABLE `ebooks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `email_campaigns`
--
ALTER TABLE `email_campaigns`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `email_templates`
--
ALTER TABLE `email_templates`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `enrollments`
--
ALTER TABLE `enrollments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expert_advisors`
--
ALTER TABLE `expert_advisors`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `indicators`
--
ALTER TABLE `indicators`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lesson_completions`
--
ALTER TABLE `lesson_completions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lesson_videos`
--
ALTER TABLE `lesson_videos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marketing_analytics`
--
ALTER TABLE `marketing_analytics`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_settings`
--
ALTER TABLE `payment_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `popups`
--
ALTER TABLE `popups`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_screenshots`
--
ALTER TABLE `product_screenshots`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `promotion_user`
--
ALTER TABLE `promotion_user`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `quiz_attempts`
--
ALTER TABLE `quiz_attempts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `site_settings`
--
ALTER TABLE `site_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sms_campaigns`
--
ALTER TABLE `sms_campaigns`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `social_accounts`
--
ALTER TABLE `social_accounts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscription_plans`
--
ALTER TABLE `subscription_plans`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `system_settings`
--
ALTER TABLE `system_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `two_factor_auth`
--
ALTER TABLE `two_factor_auth`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_profiles`
--
ALTER TABLE `user_profiles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_subscriptions`
--
ALTER TABLE `user_subscriptions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `verification_codes`
--
ALTER TABLE `verification_codes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `article_views`
--
ALTER TABLE `article_views`
  ADD CONSTRAINT `article_views_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_views_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `certificates`
--
ALTER TABLE `certificates`
  ADD CONSTRAINT `certificates_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `certificates_enrollment_id_foreign` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `certificates_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `ebooks`
--
ALTER TABLE `ebooks`
  ADD CONSTRAINT `ebooks_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `enrollments`
--
ALTER TABLE `enrollments`
  ADD CONSTRAINT `enrollments_coupon_id_foreign` FOREIGN KEY (`coupon_id`) REFERENCES `coupons` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `enrollments_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `enrollments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `expert_advisors`
--
ALTER TABLE `expert_advisors`
  ADD CONSTRAINT `expert_advisors_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `indicators`
--
ALTER TABLE `indicators`
  ADD CONSTRAINT `indicators_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `lesson_completions`
--
ALTER TABLE `lesson_completions`
  ADD CONSTRAINT `lesson_completions_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lesson_completions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `lesson_videos`
--
ALTER TABLE `lesson_videos`
  ADD CONSTRAINT `lesson_videos_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `marketing_analytics`
--
ALTER TABLE `marketing_analytics`
  ADD CONSTRAINT `marketing_analytics_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_featured_image_id_foreign` FOREIGN KEY (`featured_image_id`) REFERENCES `media` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `products_thumbnail_id_foreign` FOREIGN KEY (`thumbnail_id`) REFERENCES `media` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `product_screenshots`
--
ALTER TABLE `product_screenshots`
  ADD CONSTRAINT `product_screenshots_media_id_foreign` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_screenshots_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `promotion_user`
--
ALTER TABLE `promotion_user`
  ADD CONSTRAINT `promotion_user_promotion_id_foreign` FOREIGN KEY (`promotion_id`) REFERENCES `promotions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `promotion_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quiz_attempts`
--
ALTER TABLE `quiz_attempts`
  ADD CONSTRAINT `quiz_attempts_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quiz_attempts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `social_accounts`
--
ALTER TABLE `social_accounts`
  ADD CONSTRAINT `social_accounts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `two_factor_auth`
--
ALTER TABLE `two_factor_auth`
  ADD CONSTRAINT `two_factor_auth_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD CONSTRAINT `user_profiles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_subscriptions`
--
ALTER TABLE `user_subscriptions`
  ADD CONSTRAINT `user_subscriptions_subscription_plan_id_foreign` FOREIGN KEY (`subscription_plan_id`) REFERENCES `subscription_plans` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_subscriptions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `verification_codes`
--
ALTER TABLE `verification_codes`
  ADD CONSTRAINT `verification_codes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
