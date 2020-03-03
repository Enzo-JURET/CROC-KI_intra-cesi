<?php

class conf {
   
  static private $databases = array(
    'hostname' => 'localhost',
    'database' => 'intra_cesi',
    'login' => 'admin',
    'password' => 'KK05epr5!'
  );
   
  static public function getHostname() {
    return self::$databases['hostname'];
  }

  static public function getDatabase() {
    return self::$databases['database'];
  }

  static public function getLogin() {
    return self::$databases['login'];
  }

  static public function getPassword() {
    return self::$databases['password'];
  }
   
}
?>