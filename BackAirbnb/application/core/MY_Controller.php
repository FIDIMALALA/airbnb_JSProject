<?php defined('BASEPATH') OR exit('No direct script access allowed');

    abstract class MY_Controller extends CI_Controller{
        protected $_data = array();
        protected $_Model = array();

        public function __construct(){
            parent::__construct();
        }

        public function loadView($view){
            $this->load->view($view);
        }
    }