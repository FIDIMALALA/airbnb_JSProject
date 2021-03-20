<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    use Restserver\Libraries\REST_Controller;
    require APPPATH . '/libraries/REST_Controller.php';

    class host extends REST_Controller{
        public function __construct(){
            parent::__construct();
            // $this->load->model('host_Model');
        }

        public function index(){
        }

        public function index_get(){
            $this->addHost_post();
        }

        // methode : GET
        // * @url : host/getHost
        public function getData_get(){
            $data = $this->host_Model->getData();
            $this->response($data, REST_Controller::HTTP_OK);
        }

        // methode : POST
        public function addHost_post(){
            header("Access-Control-Allow-Origin: *");
            $this->form_validation->set_rules('EMailHote', 'hostMail', 'valid_emails');

            if ($this->form_validation->run() == FALSE) {
                echo "Data not found";
            }
            else {
                $insert_data = [
                    'NomHote' => $this->post('hostNom'),
                    'PrenomHote' => $this->post('hostPrenom'),
                    'DDNHote' => $this->post('hostDDN'),
                    'EMailHote' => $this->post('hostMail'),
                    'TelHote' => $this->post('hostTel'),
                    'PaysHote' => $this->post('hostPays'),
                ];

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

        // host login
        // public function host_login($hostNam, $hostPWD){

        // }
    }