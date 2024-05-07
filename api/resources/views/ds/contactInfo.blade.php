<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Contact Information </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Street address (Line 1)*</b></td>
                <td>{{$data['homeAddress'][0]['streetAddress']}}</td>


            </tr>
            <tr>
                <td> <b> Street address (Line 2)</b></td>
                <td>
                    @if(isset($data['homeAddress']['streetAddress2'])) $data['homeAddress']['streetAddress2'] @endif


                </td>
            </tr>


            <tr>
                <td> <b> City*</b></td>
                <td>{{$data['homeAddress'][0]['city']}}</td>
            </tr>
            <tr>
                <td> <b> State/Province*</b></td>
                <td>{{$data['homeAddress'][0]['state']}}</td>
            </tr>
            <tr>
                <td> <b> Postal Zone/Zip Code*</b></td>
                <td>

                    @if(isset($data['homeAddress'][0]['zipCode'])) {{$data['homeAddress'][0]['zipCode']}} @endif
                </td>
            </tr>
            <tr>
                <td> <b> Country/Region*</b></td>
                <td> @if(isset($data['homeAddress']['country'])) {{$data['homeAddress']['country']}} @endif</td>
            </tr>

            <tr>
                <td> <b> Is your Mailing Address the same as your Home Address?</b></td>
              

                <td>{{rYes($data,'hasSameMailingAddressAsHome')}}</td>

                
            </tr>

            <tr>
                <td> <b> Primary Phone Number*</b></td>
                <td>{{$data['phonePrimary']}}</td>
            </tr>

            <tr>
                <td> <b> Secondary Phone Number</b></td>
                <td>{{$data['phoneSecondary']}}</td>
            </tr>
            <tr>
                <td> <b> Work Phone Number</b></td>
                <td>{{$data['phoneWork']}}</td>
            </tr>
            <tr>
                <td> <b> Have you used any other phone number in the last five years?</b></td>
          
                <td>{{rYes($data,'hasAdditionalPhoneNumbers')}}</td>
            </tr>
            <tr>
                <td> <b> Have you used any other email address in the last five years?</b></td>
                    
                <td>{{rYes($data,'hasAdditionalEmails')}}</td>
            </tr>
        </table>

        @foreach($data['travelers'] as $traveler)
        <table class="table table-bordered">
            <tr>
                <td>1. Social Media Platform*</td>
                <td></td>

            </tr>
            <tr>
                <td>1. Social Media Handle*</td>
                <td></td>

            </tr>
        </table>

        @endforeach

        <table>
            <tr>
                <td> Do you wish to provide information about any other websites or applications you have used within the last five years to create or share content, such as photos, videos, or status updates?</td>
          
                <td>{{rYes($data,'hasAdditionalSocialMedia')}}</td>
            </tr>
        </table>

    </div>
</div>