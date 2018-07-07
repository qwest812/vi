<?php
//var_dump($_POST);
include ('DataBaseController.php');
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.07.2018
 * Time: 13:07
 */
class LoginController
{
    private $DB;
     function __construct(){
        $this->DB=DataBaseController::getObject();
         if($_POST['login']=='registration'){

             echo ($this->registration()) ? 'Htubcnhfwbz ecgtiyrf' : 'регистрация не успешкна';

         }
    }
    function registration(){
            $userData=$this->ifNoEmptyRegistration($_POST);
//        var_dump($_POST);
        if($userData){
//            var_dump($this->DB->ifUserExist($userData['sad']));
            if(!$this->DB->ifUserExist($userData['user_email'])){
                $userData['user_birthday']=$userData['year'].'-'.$userData['month'].'-'.$userData['day'];
                $userData['user_reg_date']= date('Y-m-d H:i:s');
//                var_dump($userData);
                return($this->DB->addUser($userData));
            }
            return false;
        }
    }
    function login(){
        $f = $this->DB->addUser();
//        var_dump($f);
    }

    /**
     * @param $array
     * @return bool|int|string
     */
    function ifNoEmptyRegistration($array){

        if( !empty($array['user_name']) &&
            !empty($array['user_sname']) &&
            !empty($array['user_email']) &&
            !empty($array['user_phone']) &&
            !empty($array['user_pass'])  &&
            !empty($array['day']) &&
            !empty($array['month']) &&
            !empty($array['year']) &&
            !empty($array['sex'])
        ){
            $array=$this->clearValueArray($array);
            return $array;
        }
        return false;
    }

    /**
     * @param $array
     * @return mixed
     */
    function clearValueArray($array){
        foreach ($array as$key=> $value){
            $array[$key]=trim($value);
        }
        return $array;
    }
}
$f=new LoginController();
//$f->login();

