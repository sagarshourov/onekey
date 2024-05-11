<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Personal Information </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Do you currently hold or have you ever held any nationality other than the one indicated above? </b></td>
                <td> {{rYes($data,'hasMultipleNationalities')}} </td>
            </tr>


        @if($data['hasMultipleNationalities']==1)
            @foreach($data['nationalities'] as $nationality)

            <tr>
                <td colspan="2">

                    <div class="card p-0">
                        <h6 class="card-header p-1">Other Nationality # 1</h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">
                                <tr>
                                    <td> <b>Other Country/Region of Origin (Nationality)*</b></td>
                                    <td>{{ getLabelByValue($selectData,'countries', $nationality, 'country') }}</td>
                                </tr>
                                <tr>
                                    <td><b> Do you hold a passport for the other country/region of origin (nationality) above? </b></td>

                                    <td>{{rYes($nationality,'hasPassportNumber')}}</td>
                                </tr>
                                <tr>
                                    <td><b> Passport/Travel Document Number* </b></td>
                                    <td>{{ $nationality['passportNumber'] }}</td>
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
                <td> <b>Are you a permanent resident of a country/region other than your country/region of origin (nationality) as indicated above? </b></td>
                <td> {{rYes($data,'hasMultiplePermanentResidents')}} </td>
            </tr>
            @if($data['hasMultiplePermanentResidents']==1)
                @foreach($data['residents'] as $resident)
                <tr>
                    <td colspan="2">
                        <div class="card p-0">
                            <h6 class="card-header p-1">Other Permanent Resident # 1</h6>
                            <div class="card-body p-0">
                                <table class="table mb-0 table-bordered">
                                    <tr>
                                        <td> <b> Other Permanent Resident Country/Region*</b></td>
                                        <td> {{ getLabelByValue($selectData,'countries', $data,'country') }}</td>
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
                <td> <b> National Identification Number</b></td>
                <td>{{$data['nationalId']}}</td>


            </tr>
            <tr>
                <td> <b> U.S. Social Security area number</b></td>
                <td>{{$data['USSocialSecurityAreaNumber']}}</td>
            </tr>
            <tr>
                <td> <b> U.S. Taxpayer ID Number</b></td>
                <td>{{$data['USTaxpayerIdNumber']}}</td>
            </tr>

        </table>

    </div>
</div>