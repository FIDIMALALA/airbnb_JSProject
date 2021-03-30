<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    use Restserver\Libraries\REST_Controller;
    require APPPATH . '/libraries/REST_Controller.php';

    class host extends REST_Controller{
        public function __construct(){
            parent::__construct();
        }

        public function index(){
        }

        public function index_get(){
            $this->addHost_post();
        }

        // methode : GET
        // @url : host/getHost
        public function getData_get(){
            $data = $this->host_Model->getData();
            $this->response($data, REST_Controller::HTTP_OK);
        }

        // methode : POST
        // @url : host/addHost
        public function addHost_post(){
            header("Access-Control-Allow-Origin: *");
            $this->form_validation->set_rules('EMailHote', 'hostMail', 'valid_emails');
            if ($this->form_validation->run() == FALSE) {
                echo "Data not found";
            }
            else {
                $insert_data = array(
                    'NomHote' => $this->input->get('hostName', FALSE),
                    'PrenomHote' => $this->input->get('hostLastName', FALSE),
                    'DDNHote' => $this->input->get('hostBorn', FALSE),
                    'EMailHote' => $this->input->get('hostMail', FALSE),
                    'TelHote' => $this->input->get('hostTel', FALSE),
                    'PaysHote' => $this->input->get('hostPays', FALSE)
                );
                $output = $this->host_Model->save($insert_data);
                if ($output>0 AND !empty($output)) {
                    $message = [
                        'status' => true,
                        'message' => "Host registration successful"
                    ];
                    $this->response($message, REST_Controller::HTTP_OK);
                }else{
                    $message = [
                        'status' => true,
                        'message' => "Not register your account"
                    ];
                    $this->response($message, REST_Controller::HTTP_NOT_FOUND);
                }       
            }
        }
    }