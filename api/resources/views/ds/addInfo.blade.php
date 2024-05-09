<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Additional Point of Contact Information </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td colspan="2"> <b> List at least two contacts in your country of residence who can verify the information that you have provided on this application. Do not list immediate family members or other relatives. </b></td>

            </tr>

            <tr>
                <td> <b> Last name *</b></td>
                <td>{{$data['addInfo']['lastName']}}</td>
            </tr>
            <tr>
                <td> <b> First name *</b></td>
                <td>{{$data['addInfo']['firstName']}}</td>
            </tr>
            <tr>
                <td> <b> Address </b></td>
                <td>{{$data['addInfo']['address']}}</td>
            </tr>
            <tr>
                <td> <b> City </b></td>
                <td>{{$data['addInfo']['city']}}</td>
            </tr>
            <tr>
                <td> <b> State or province </b></td>
                <td>{{$data['addInfo']['firstName']}}</td>
            </tr>
            <tr>
                <td> <b> Postal code </b></td>
                <td>{{$data['addInfo']['postCode']}}</td>
            </tr>
            <tr>
                <td> <b> Country </b></td>
                <td> {{  $data['addInfo']['country'] }}</td>
            </tr>

            <tr>
                <td> <b> Phone Number * </b></td>
                <td>{{$data['addInfo']['phone']}}</td>
            </tr>
            <tr>
                <td> <b> Email Address *</b></td>
                <td>{{$data['addInfo']['email']}}</td>
            </tr>


        </table>

        <table class="table table-bordered">
            <tr>
                <td colspan="2"> <b> Second Contact  </b></td>

            </tr>

            <tr>
                <td> <b> Last name *</b></td>
                <td>{{$data['secondInfo']['lastName']}}</td>
            </tr>
            <tr>
                <td> <b> First name *</b></td>
                <td>{{$data['secondInfo']['firstName']}}</td>
            </tr>
            <tr>
                <td> <b> Address </b></td>
                <td>{{$data['secondInfo']['address']}}</td>
            </tr>
            <tr>
                <td> <b> City </b></td>
                <td>{{$data['secondInfo']['city']}}</td>
            </tr>
            <tr>
                <td> <b> State or province </b></td>
                <td>{{$data['secondInfo']['state']}}</td>
            </tr>
            <tr>
                <td> <b> Postal code </b></td>
                <td>{{$data['secondInfo']['postCode']}}</td>
            </tr>
            <tr>
                <td> <b> Country </b></td>
                <td> {{ getLabelByValue($selectData,'countries', $data['secondInfo'], 'country') }}</td>
            </tr>

            <tr>
                <td> <b> Phone Number * </b></td>
                <td>{{$data['secondInfo']['phone']}}</td>
            </tr>
            <tr>
                <td> <b> Email Address *</b></td>
                <td>{{$data['secondInfo']['email']}}</td>
            </tr>


        </table>


    </div>
</div>