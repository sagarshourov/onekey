@php 

if (!function_exists("usContact")) {
    function usContact($us){
        if($us==1){
            return 'I know a Person';
        }else if($us==2){
            return 'I know a Organization';
        }else{
            return 'I don\'t know any of them';
        }  
    }

}


@endphp

<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Us Contact </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Do you know a person or organization that you want to list as your point of contact in the U.S.?</b></td>
                <td>{{ usContact($data['us_contact']) }} </td>
            </tr>
            @if($data['us_contact']==1)
            <tr>
                <td> <b> First Name, *</b></td>
                <td>{{$data['uscontact']['person']['firstName']}}</td>
            </tr>


            <tr>
                <td> <b> Last Name *</b></td>
                <td>{{$data['uscontact']['person']['lastName']}}</td>
            </tr>
            <tr>
                <td> <b> Phone Number *</b></td>
                <td>{{$data['uscontact']['person']['phoneNumber']}}</td>
            </tr>
            <tr>
                <td> <b> Email Address *</b></td>
                <td>{{$data['uscontact']['person']['email']}}</td>
            </tr>
            <tr>
                <td> <b> Street address (Line 1)*</b></td>
                <td>{{$data['uscontact']['person']['streetAddress']}}</td>
            </tr>
            <tr>
                <td> <b> Street address (Line 2) *</b></td>
                <td>{{$data['uscontact']['person']['streetAddress2']}}</td>
            </tr>
            <tr>
                <td> <b> City*</b></td>
                <td>{{$data['uscontact']['person']['city']}}</td>
            </tr>
            <tr>
                <td> <b> State/Province </b></td>
                <td>{{$data['uscontact']['person']['state']}}</td>
            </tr>
            <tr>
                <td> <b> Postal Zone/Zip Code* </b></td>
                <td>{{$data['uscontact']['person']['zipcode']}}</td>
            </tr>
            <tr>
                <td> <b> Country/Region*</b></td>
                <td>{{ getLabelByValue($selectData,'countries', $data['uscontact']['person'], 'country')}} </td>
            </tr>
            @endif
            @if($data['us_contact']==2)
            <tr>
                <td> <b> Organization  Name, *</b></td>
                <td>{{$data['uscontact']['organization']['firstName']}}</td>
            </tr>


            <tr>
                <td> <b> Last Name *</b></td>
                <td>{{$data['uscontact']['organization']['lastName']}}</td>
            </tr>
            <tr>
                <td> <b> Phone Number *</b></td>
                <td>{{$data['uscontact']['organization']['phoneNumber']}}</td>
            </tr>
            <tr>
                <td> <b> Email Address *</b></td>
                <td>{{$data['uscontact']['organization']['email']}}</td>
            </tr>
            <tr>
                <td> <b> Street address (Line 1)*</b></td>
                <td>{{$data['uscontact']['organization']['streetAddress']}}</td>
            </tr>
            <tr>
                <td> <b> Street address (Line 2) *</b></td>
                <td>{{$data['uscontact']['organization']['streetAddress2']}}</td>
            </tr>
            <tr>
                <td> <b> City*</b></td>
                <td>{{$data['uscontact']['organization']['city']}}</td>
            </tr>
            <tr>
                <td> <b> State/Province </b></td>
                <td>{{$data['uscontact']['organization']['state']}}</td>
            </tr>
            <tr>
                <td> <b> Postal Zone/Zip Code* </b></td>
                <td>{{$data['uscontact']['organization']['zipcode']}}</td>
            </tr>
            <tr>
                <td> <b> Country/Region*</b></td>
                <td>{{ getLabelByValue($selectData,'countries', $data['uscontact']['organization'], 'country')}} </td>
            </tr>
            @endif
        </table>




    </div>
</div>