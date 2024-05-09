@php 

if (!function_exists("rYes")) {

    function rYes($dat,$key){

        if(isset($dat[$key]) && $dat[$key]==1){
            return 'Yes';
        }else{
            return 'No';
        }
    }
}
if (!function_exists("dateFormat")) {
    function dateFormat($date){
        
        if(isset($date['dayIndex']) && isset($date['monthIndex']) && isset($date['yearIndex'])){
            $date = $date['dayIndex'].'/'.$date['monthIndex'].'/'.$date['yearIndex'];
            return  date('jS  F Y', strtotime($date)) ;
        }else{
            return '';
        }
    }
}
if (!function_exists("getLabelByValue")) {
    function getLabelByValue($selectData, $key, $data, $value){
        if(isset($data[$value])){
            foreach ($selectData[$key] as $keys => $type) {
                if ($type['value'] == $data[$value]) {
                    return $type['label'];
                }

        
            }
        }
        return null;  
    }
}




@endphp

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DS 160</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">



    <style>
        @font-face {
            font-family: 'sagar_font';
            src: url('{{ public_path("fonts/DejaVuSans.ttf") }}');
        }

        * {
            font-family: sagar_font, sans-serif;
        }

        td {
            font-size: 12px;
            ;
            padding: 5px;
        }

        tr {
            padding: 0px;
        }

        th {
            font-size: 12px;
            font-weight: bold;
        }
    </style>

</head>

<body>



    <h2>DS 160 </h2>
    <table class="table">
        <tr>
            <td>Name :</td>
            <td>{{ $user['first_name'] }}</td>
        </tr>
        <tr>
            <td>Email :</td>
            <td>{{ $user['email'] }}</td>
        </tr>
    </table>


    <div style="margin-top: 20px; margin-bottom: 20px; border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
        <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;">Applicant Information</div>
        <div style="padding: 8px; overflow : auto;  ">

            <table class="table table-bordered">
                <tr>
                    <td> <b> Email Address : </b></td>
                    <td>{{ $data['userEmail'] }}</td>
                </tr>


                <tr>
                    <td><b>First name(s) or given name(s) : </b></td>
                    <td>{{ $data['firstName'] }}</td>
                </tr>
                <tr>
                    <td><b> Family name(s) or last name(s) : </b></td>
                    <td>{{ $data['lastName'] }}</td>
                </tr>
                <tr>
                    <td><b> Full name in your native alphabet : </b></td>
                    <td>{{ $data['fullName'] }}</td>
                </tr>
                <tr>
                    <td><b> Have you ever gone by other names, such as maiden, religious, professional, or alias names </b></td>
                    <td>{{rYes($data,'hasAdditionalNames')}}</td>
                </tr>
                @if($data['hasAdditionalNames']==1) 
                
                <tr>
                    <td><b> Additional given name(s)*</b></td>
                    <td>{{$data['additionalFirstName']}}</td>
                </tr>
                <tr>
                    <td><b> Additional family name(s)*</b></td>
                    <td>{{$data['additionalLastName']}}</td>
                </tr>
                
                @endif
                <tr>
                    <td><b> Have you used a four-letter code to represent your name in a communication system?</b></td>
                    <td>{{rYes($data,'hasTelecode')}}</td>
                </tr>
                @if($data['hasTelecode']==1) 
                
                <tr>
                    <td><b>  Telecode for first/given name(s)*</b></td>
                    <td>{{$data['telecodeFirstName']}}</td>
                </tr>
                <tr>
                    <td><b>  Telecode for family name(s)*</b></td>
                    <td>{{$data['telecodeLastName']}}</td>
                </tr>
                
                @endif


                <tr>
                    <td><b> Gender </b></td>
                    <td>{{ $data['gender'] }}</td>
                </tr>
                <tr>
                    <td> <b> Marital Status </b></td>
                    <td> {{getLabelByValue($selectData,'married', $data, 'maritalStatus')}}</td>
                </tr>
                <tr>
                    <td><b> Date of Birth </b></td>
                    <td>{{dateFormat($data['birthDate'])}}</td>
                </tr>
                <tr>
                    <td> <b> City of Birth </b></td>
                    <td>{{ $data['birthCity'] }}</td>
                </tr>
                <tr>
                    <td><b> State/region/province of birthplace </b></td>
                    <td>{{ $data['birthStateProvince'] }}</td>
                </tr>
                <tr>
                    <td><b> Country of Birth </b></td>
                    <td> {{ getLabelByValue($selectData,'countries', $data, 'birthCountry') }} </td>
                </tr>










            </table>

        </div>
    </div>


    @include('ds.pinfo')
    @include('ds.trip')
    @include('ds.travelsC')
    @include('ds.travelsP')
    @include('ds.contactInfo')
    @include('ds.passportInfo')

    @include('ds.usContact')
    @include('ds.family')
    @include('ds.education')
    @include('ds.securityQuestion')
    @include('ds.addInfo')









</body>

</html>