<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class host_Model extends MY_Model{
        private $_table = "hotes";
        private $_pk = "IdHote";

        public function __construct(){
            parent::__construct();
        }

        public function get_db_table(){
            return $this->_table;
        }

        public function get_db_table_pk(){
            return $this->_pk;
        }
    }