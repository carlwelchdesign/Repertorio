<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'repertorio_admin');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'zI;^&;Y@v*^wN;)dZ7MR[)uoPxNur2LzK724q]/6[Hl,cGE7)_|Rl=+vOLJJw[yI');
define('SECURE_AUTH_KEY',  'o2^!fL:[RIj?JU!fg,7S*LfbsU?9y &@$AA<_;xavu4~d;8*3 +C!.v98Pb0=s,7');
define('LOGGED_IN_KEY',    'S;|UY.p3{Ra|M~wkah=<2vzfWF9VwBU&_T%5C|U?[cNWNu@N05VyGV~PE-kyzG@l');
define('NONCE_KEY',        '-Ldc)&#2:i.H1o=Z;[+(4c9b#n3?9V1r+byBgU^YE/./|s,[hFOwoS|bbuC^k)Bf');
define('AUTH_SALT',        'H8SlT5#(+*>P9z1&R?VZL>7 <9})j26>|&_pJRVO+<EY+)fn+`j/tfQSu4QK#R2}');
define('SECURE_AUTH_SALT', 'gVs}j1ae;cz]#QEG3zQ(mO13~^:0$q|D6eCg%BzFLs k#s#gLf$y|)D(Z=,;f#7d');
define('LOGGED_IN_SALT',   'Gfj?DG8I.9*=-a:$2Ds-IZ!2E2#0Q[7h|em kkVG[5n|15#=8]M+e_jEedgY^dV8');
define('NONCE_SALT',       'G3c|Gj+N<AKS%!+7>$JeT$bw94rV^yNy~6O2u>Ma1CW84KD#xAGz_;q51-qyHT^x');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
