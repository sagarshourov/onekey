<div style="margin-top: 100px; margin-bottom: 20px;  border: 1px solid #eee; box-shadow: 0 1px 1px rgba(0,0,0,.05);  width : 100%; clear : both; ">
    <div style="color: #333; background-color: #f5f5f5; border-color: #ddd; padding: 5px 10px; border-bottom: 1px solid transparent;"> Trip details </div>
    <div style="padding: 8px; overflow : auto;  ">

        <table class="table table-bordered">
            <tr>
                <td> <b> Reason for the Trip* </b></td>
                <td>Vacation or tourism</td>
            </tr>

            @foreach($data['purposes'] as $purpose)

            <tr>
                <td colspan="2">
                    <div class="card p-0">
                        <h6 class="card-header p-1">Purpose of the trip to the US #1</h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">
                                <tr>
                                    <td> <b>Purpose of the trip to the US*</b></td>
                                    <td>{{$purpose['mainPurpose']}}</td>
                                </tr>
                                <tr>
                                    <td><b> Specify </b></td>
                                    <td>{{$purpose['specify']}}</td>
                                </tr>

                            </table>
                        </div>
                    </div>

                </td>

            </tr>

            @endforeach


        </table>

        <table class="table table-bordered">
            <tr>
                <td> <b> Have you made any specific travel plans yet?* </b></td>


                <td>{{rYes($data,'hasTravelPlansInput')}}</td>
            </tr>

            <tr>
                <td colspan="2">
                    <div class="card p-0">
                        <h6 class="card-header p-1">Other Permanent Resident # 1</h6>
                        <div class="card-body p-0">
                            <table class="table mb-0 table-bordered">
                                <tr>
                                    <td> <b> Other Permanent Resident Country/Region*</b></td>
                                    <td>Country</td>
                                </tr>

                            </table>
                        </div>
                    </div>

                </td>

            </tr>
        </table>

        <table class="table table-bordered">
            <tr>
                <td> <b>Who is paying for the trip?</b></td>
                <td>{{$data['personPayingForTrip']}}</td>
            </tr>
        </table>

    </div>
</div>