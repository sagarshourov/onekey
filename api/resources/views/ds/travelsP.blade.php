<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Pervious Travels </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Have you ever visited or traveled to the United States before?</b></td>

                <td> {{rYes($data,'haveYouEverBeenToUS')}} </td>
            </tr>

            @if($data['haveYouEverBeenToUS']==1)

                @foreach($data['previousVisit'] as $key => $traveler)

                <tr>
                    <td colspan="2">
                        <div class="card p-0">
                            <h6 class="card-header p-1">Previous visit #{{$key+1}}</h6>
                            <div class="card-body p-0">
                                <table class="table mb-0 table-bordered">
                                    <tr>
                                        <td> <b>Date Arrived*</b></td>
                                        <td> {{dateFormat($traveler['arrivalDate'])}} </td>



                                    </tr>
                                    <tr>
                                        <td><b> Length of Stay*</b></td>
                                        <td>{{ $traveler['stayLengthValue'] }} {{ $traveler['stayLengthType'] }}</td>
                                    </tr>


                                </table>
                            </div>
                        </div>

                    </td>

                </tr>

                @endforeach

            @endif
        </table>

        <table class="table table-bordered">
            <tr>
                <td> <b> Do you or did you ever hold a U.S. Driver's Licence?</b></td>

                <td> {{rYes($data,'hasUSDriversLicense')}} </td>
            </tr>
            @if($data['hasUSDriversLicense']==1)
                @foreach($data['USDriverLicenses'] as $licenses)

                <tr>
                    <td colspan="2">
                        <div class="card p-0">
                            <h6 class="card-header p-1">Previous US licence #1</h6>
                            <div class="card-body p-0">
                                <table class="table mb-0 table-bordered">
                                    <tr>
                                        <td> <b>Driver's Licence Number**</b></td>
                                        <td>{{ $licenses['licenseId']}} </td>
                                    </tr>


                                </table>
                            </div>
                        </div>

                    </td>

                </tr>
                @endforeach
        @endif

        </table>

        <table class="table table-bordered">
            <tr>
                <td>
                    <b> Have you ever been issued a U.S. visa before? </b>
                </td>

                <td> {{rYes($data,'hasIssuedVisa')}} </td>
                </td>
            </tr>

            @if($data['hasIssuedVisa']==1)
                <tr>
                    <td>
                        <b> Visa Issuing Post Name*</b>
                    </td>



                    <td> {{ getLabelByValue($selectData,'countries', $data['lastVisa'],'postName') }}
                    </td>
                </tr>

                <tr>
                    <td>
                        <b> Visa issue date*</b>
                    </td>
                    <td> {{dateFormat($data['issueDate'])}} </td>
                </tr>

                <tr>
                    <td>
                        <b> Visa expiration date*</b>
                    </td>
                    <td> {{dateFormat($data['expirationDate'])}} </td>
                
                </tr>
                <tr>
                    <td>
                        <b> Visa Number*</b>
                    </td>
                    <td>

                        {{$data['lastVisa']['visaNumber']}}

                    </td>
                </tr>
                <tr>
                    <td>
                        <b> Are you applying for the same type of visa?</b>
                    </td>

                    <td> {{rYes($data,'hasSameType')}} </td>

                </tr>

            @endif
            <tr>
                <td>
                    <b> Are you applying from the same country and is this your country of residence?</b>
                </td>
                <td> {{rYes($data,'sameCountry')}} </td>
            </tr>
            
            <tr>
                <td>
                    <b> Have you been ten-printed?</b>
                </td>
                <td> {{rYes($data,'tenPrinted')}} </td>
            </tr>
            <tr>
                <td>
                    <b> Has your U.S. Visa ever been lost or stolen?</b>
                </td>

                <td> {{rYes($data,'hadVisaLost')}} </td>
            </tr>
            @if($data['hadVisaLost']==1)
            <tr>
                <td><small>Year</small></td>
                <td><small>{{$data['lostVisa']['year']}}</small></td>
            </tr>
            <tr>
                <td><small>Explain </small></td>
                <td><small>{{$data['lostVisa']['explain']}}</small></td>
            </tr>
            @endif
            <tr>
                <td>
                    <b> Has your U.S. Visa ever been cancelled or revoked?</b>
                </td>

                <td> {{rYes($data,'hasVisaCancelled')}} </td>
            </tr>
            @if($data['hasVisaCancelled']==1)
            
                <tr>
                    <td><small>Explain </small></td>
                    <td><small>{{$data['lastVisa']['visaCancelledExplain']}}</small></td>
                </tr>
            @endif
            <tr>
                <td>
                    <b> The Visa that you're renewing has "Clearance received" or "212(a) waiver of ineligibility" annotated on the visa</b>
                </td>

                <td> {{rYes($data,'clearanceReceived')}} </td>
            </tr>
            
            <tr>
                <td>
                    <b> Have you ever been denied a U.S. visa, entry to the United States, or withdrawn your application for entry at the port of entry?</b>
                </td>
                <td>

                    {{rYes($data,'hasBeenRefusedForVisa')}}
                </td>
            </tr>
            @if($data['hasBeenRefusedForVisa']==1)
            <tr>
                    <td><small>Year </small></td>
                    <td><small>{{$data['lastVisa']['year']}}</small></td>
                </tr>
                <tr>
                    <td><small>Explain </small></td>
                    <td><small>{{$data['lastVisa']['explain']}}</small></td>
                </tr>
            @endif
            <tr>
                <td>
                    <b> Has anyone filed an immigrant petition for you with the United States Citizenship and Immigration Service?</b>
                </td>
                <td>

                    {{rYes($data,'hasAnyoneEverFilledOnBehalf')}}
                </td>
            </tr>
            @if($data['hasAnyoneEverFilledOnBehalf']==1)
            
                <tr>
                    <td><small>Explain </small></td>
                    <td><small>{{$data['hasAnyoneEverFilledOnBehalfExplain']}}</small></td>
                </tr>
            @endif
        </table>

    </div>
</div>