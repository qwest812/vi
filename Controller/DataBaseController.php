<?php

/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.07.2018
 * Time: 10:25
 */
class DataBaseController
{
    protected $host = '127.0.0.1';
    protected $db = 'thevisio_test';
    protected $user = 'thevisio_test';
    protected $pass = 'thevisio_test';
    protected $charset = 'utf8';
    protected static $dbObject;
    protected static $DB = '';
    protected $pdo = '';

    private function  __construct()
    {
        $dsn = "mysql:host=$this->host;dbname=$this->db;charset=$this->charset";
        try {
            $this->pdo = new PDO($dsn, $this->user, $this->pass);
        } catch (PDOException $e) {
            die('����������� �� �������: ' . $e->getMessage());
        }
    }

    /**
     * @return DataBaseController|string
     *
     */
    static function getObject()
    {
        if (!self::$DB) {
            self::$DB = new self;
        }
        return self::$DB;

//        return
    }

    function ifUserExist($email)
    {
//        var_dump($email);
        $sql = "SELECT * FROM `user` WHERE user_email= ?";
         $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($email);
    }

//    function addUser($userName, $userSname, $userEmail, $userPhone, $userPass,$userBirthday, $userSex){
    function addUser(){
            $sql="INSERT INTO `users` (`id`, `user_name`, `user_sname`, `user_email`, `user_phone`, `user_pass`, `user_birthday`, `user_sex`, `reg_date`)
                  VALUES (NULL, 'sad', 'sad', 'sad', 'sd', 'saf', '2018-07-03', 'male', '2018-07-06 02:00:03');";
        $stmt =$this->pdo->prepare($sql);
          return $stmt->execute();
    }

    function  selectAll()
    {
        $sql = "SELECT `name`, `name_eng`, `name_righter` FROM `book`, `righter` WHERE book.id_righter=righter.id";

        $result = array();
        $stmt = $this->pdo->query($sql);
        $result = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $result[] = $row;
//            var_dump($row);
//            echo '<br>';
        }
//        var_dump($row);
        return $result;

    }

    /**
     * @param $table
     * @return bool
     */
    function ifTableExist($table)
    {
        $sql = "SHOW TABLES LIKE ?";

        $stmt = $this->pdo->prepare($sql);

        if ($stmt->execute(array($table))) {
            $isTable = $stmt->fetch();
            return $isTable != false;

        }
        return false;
    }

    /**
     * create users table
     * @return bool
     */
    function createTable()
    {
        if (!$this->ifTableExist('users')) {
            $sql = "CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(30) NOT NULL,
    user_sname VARCHAR(30) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_phone VARCHAR(30) NOT NULL,
    user_pass VARCHAR(30) NOT NULL,
    user_birthday DATE NOT NULL,
    user_sex VARCHAR(6) NOT NULL,
    reg_date TIMESTAMP
    )";
            $stmt = $this->pdo->prepare($sql);
            return $stmt->execute();

        }
        return false;
    }

}


$f = DataBaseController::getObject()->addUser();
var_dump($f);