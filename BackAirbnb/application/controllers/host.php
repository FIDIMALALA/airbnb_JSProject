<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    use Restserver\Libraries\REST_Controller;
    require APPPATH . '/libraries/REST_Controller.php';

    class host extends REST_Controller{
        public function __construct(){
            parent::__construct();
            $this->load->model('host_Model');
        }

        public function index(){
        }

        public function getData_get(){
            $data = $this->host_Model->getData();
            $this->response($data, REST_Controller::HTTP_OK);
        }
    }