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
                    @if(isset($data['homeAddress'][0]['streetAddress2'])) {{$data['homeAddress'][0]['streetAddress2']}} @endif


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
                <td> @if(isset($data['homeAddress'][0]['country']))  {{ getLabelByValue($selectData,'countries', $data['homeAddress'][0], 'country') }}  @endif</td>
            </tr>

            <tr>
                <td> <b> Is your Mailing Address the same as your Home Address?</b></td>
              

                <td>{{rYes($data,'hasSameMailingAddressAsHome')}}</td>
  
            </tr>

            @if($data['hasSameMailingAddressAsHome']==0)

            <tr>
                <td> <b> Street address (Line 1)*</b></td>
              

                <td>{{$data['mailingAddress']['streetAddress']}}</td>
  
            </tr>
            <tr>
                <td> <b> Street address (Line 2)**</b></td>
              

                <td>{{$data['mailingAddress']['streetAddress2']}}</td>
  
            </tr>
            <tr>
                <td> <b> City</b></td>
              

                <td>{{$data['mailingAddress']['city']}}</td>
  
            </tr>
            <tr>
                <td> <b> State/Province</b></td>
              

                <td>{{$data['mailingAddress']['state']}}</td>
  
            </tr>
            <tr>
                <td> <b> Postal Zone/Zip Code</b></td>
              

                <td>{{$data['mailingAddress']['zipCode']}}</td>
  
            </tr>
            <tr>
                <td> <b>  Country/Region*</b></td>
              

                <td> {{ getLabelByValue($selectData,'countries',$data['mailingAddress'],'country') }}</td>
  
            </tr>


            @endif



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
            @if($data['hasAdditionalPhoneNumbers']==1)
            @foreach($data['additionalPhones'] as $key => $addPhone)

                <tr>
                    <td> <b> {{$key+1}}. Additional Phone Number*</b></td>
                    <td>{{$addPhone['phoneNumber']}}</td>
                </tr>

            @endforeach
            @endif
            <tr>
                <td> <b> Have you used any other email address in the last five years?</b></td>
                    
                <td>{{rYes($data,'hasAdditionalEmails')}}</td>
            </tr>
            @if($data['hasAdditionalEmails']==1)
                @foreach($data['additionalEmails'] as $key => $addEmail)

                    <tr>
                        <td> <b> {{$key+1}}. Additional Email*</b></td>
                        <td>{{$addEmail['email']}}</td>
                    </tr>

                @endforeach
            @endif

        </table>

        @foreach($data['socialsMedia'] as $key => $traveler)
        <table class="table table-bordered">
            <tr>
                <td>{{$key+1}}. Social Media Platform*</td>
     
                <td>{{ getLabelByValue($selectData,'socialMediaOptions', $traveler,'platform') }}</td>


            </tr>
            <tr>
                <td>{{$key+1}}. Social Media Handle*</td>
                <td>{{$traveler['username']}}</td>
                

            </tr>
        </table>

        @endforeach

        <table>
            <tr>
                <td> <b>Do you wish to provide information about any other websites or applications you have used within the last five years to create or share content, such as photos, videos, or status updates? </b></td>
          
                <td>{{rYes($data,'hasAdditionalSocialMedia')}}</td>
            </tr>


        </table>
        @if($data['hasAdditionalSocialMedia']==1)
        @foreach($data['additionalSocials'] as $key => $addSocial)
        <table class="table table-bordered">
            <tr>
                <td>{{$key+1}}. Additional Social Media Platform</td>
                <td>{{$addSocial['platform']}}</td>

            </tr>
            <tr>
                <td>{{$key+1}}. Additional Social Media Handler</td>
                <td>{{$addSocial['username']}}</td>
                

            </tr>
        </table>

        @endforeach
        @endif
    </div>
</div>