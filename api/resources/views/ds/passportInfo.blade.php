<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Passport Information </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Type of passport/travel document*</b></td>
                <td> {{ getLabelByValue($selectData,'passportType', $data, 'passportType') }}</td>
            </tr>
            <tr>
                <td> <b> Passport/Travel Document Number*</b></td>
                <td>{{$data['passportNumber']}}</td>
            </tr>


            <tr>
                <td> <b> Passport Book Number</b></td>
                <td>{{$data['passportBookNumber']}}</td>
            </tr>
            <tr>
                <td> <b> Issuing country/authority of the passport/travel document*</b></td>
                <td> {{ getLabelByValue($selectData,'countries', $data, 'passportIssueCountry') }}</td>
            </tr>
            <tr>
                <td> <b> City*</b></td>
                <td>{{$data['passportCity']}}</td>
            </tr>
            <tr>
                <td> <b> State/Region/Province</b></td>
                <td>{{$data['passportState']}}</td>
            </tr>

            <tr>
                <td> <b> Country/Region*</b></td>
                <td> {{ getLabelByValue($selectData,'countries', $data, 'passportCountry') }}</td>
            </tr>

            <tr>
                <td> <b> Passport Issuance Date*</b></td>
                <td>{{dateFormat($data['passportIssueDate'])}}</td>
            </tr>

            <tr>
                <td> <b> Passport Expiration Date*</b></td>
                <td>{{dateFormat($data['passportExpiryDate'])}}</td>
            </tr>
            <tr>
                <td> <b> Have you ever lost a passport or had one stolen?</b></td>
                <td>{{rYes($data,'hasEverLostPassport')}}</td>
            </tr>

            @if($data['hasEverLostPassport']==1)

              @foreach($data['lostpassports'] as $lostpassport)
                <tr>
                    <td> <b> Passport/Travel Document Number*</b></td>
                    <td>{{$lostpassport['passportNumber']}}</td>
                </tr>


                <tr>
                    <td>Issuing country/authority of the passport/travel document*</td>
                    <td> {{ getLabelByValue($selectData,'countries', $lostpassport,'country') }}</td>
                </tr>

                <tr>
                    <td>Explain</td>
                    <td> {{ $lostpassport['Explain'] }}</td>
                </tr>
                @endforeach
            @endif


            <tr>
                <td> <b>Country/Region of Origin (Nationality)*</b></td>
              
                <td> {{ getLabelByValue($selectData,'countries', $data,'nationalityInput') }}</td>
            </tr>

        </table>




    </div>
</div>