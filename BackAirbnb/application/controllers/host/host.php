<?php defined('BASEPATH') OR exit('No direct script access allowed');

    require (APPPATH.'/libraries/REST_Controller.php');
    use Restserver\Libraries\REST_Controller;

    class host extends REST_Controller {

        public function add_host_post(){
            echo "bonjour";
        }

        public function fetch_all_host_get(){
            header("Acces-Control-Allow-Origin : *");

            $data = $this->host_Model->getData();
            $this->response($data);
        }

    }