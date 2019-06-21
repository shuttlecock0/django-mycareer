    var dialogs = [];

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();

        $( "#settingModal" ).modal();

        // dialog 생성
        $(".timeline-content").click(function (e) {
            var isOpen = false;
            var id = $(this).data('id');

            $.each( dialogs, function( key, obj ) {
                if(obj.config.id == id) {
                    isOpen = true;
                    return false;
                }
            });

            if(isOpen) {
                alert('이미 열려있습니다.');
            }
            else {
                var dialog = $.dialog({
		        content : `<div class="" style="width:300px;height:500px;">Contents</div>`,
		        hasMask : false,
		        id : id,
		        hotKeys : false,
		        width:'auto',
		        autoFocus   : true,
		        hasTitle : true,
		        top : (e.pageY+30)-$(document).scrollTop(),
		        left : e.pageX+30,
		        onClose : function(){
                    var idx = -1;
		            $.each( dialogs, function( key, obj ) {
		                if (obj.config.id == id) {
		                    idx = key;
		                    return false;
		                }
                    });

                    if (idx > -1) {
                        dialogs.splice(idx, 1);
                    }
                    console.log(dialogs);
                }

	            });
                dialog.open();
                dialogs.push(dialog);
            }
            console.log(dialogs);
        });

        $("#btnAddMajor").click(function ()  {
			var html = `<div class="col-md-3 pb-0">
				<select name="" id="" class="form-control">
					<option class="text-dark" value="">전공구분 선택</option>
					<option class="text-dark" value="">전공</option>
					<option class="text-dark" value="">부전공</option>
					<option class="text-dark" value="">복수전공</option>
				</select>
			</div>
			<div class="col-md-3 pb-0">
				<select name="" class="form-control">
					<option class="dark" value="">전공계열 선택</option>
					<option class="text-dark" value="">어문학</option>
					<option class="text-dark" value="">영어/영문</option>
					<option class="text-dark" value="">중어/중문</option>
				</select>
			</div>
			<div class="col-md-4 pb-0">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="전공학과 입력">
				</div>
			</div>
			<div class="col-auto pb-0">
				<div class="form-group">
					<button id="btnDelMajor" type="button" class="btn btn-outline-dark ml-1">삭제</button>
				</div>
			</div>`;

            $("#wrapSubMajor").html(html);
            $("#btnAddMajor").hide();
            $('#btnDelMajor').on('click', function() {
                $("#btnAddMajor").show();
                $("#wrapSubMajor").empty();
            });
        });

        $(".edu-title").click(function () {
            $("#"+$(this).data('section')).collapse("toggle");
        });

        var fn_deleteSubject = function() {
            var rows = $(this).closest('table>tbody');
            $(this).parent().parent().remove();

               rows.find('tr').each(function( idx, row ) {
                    $(row).find('td:first-child').html(idx+1);
                });
        };

        // 성적 모두 지우기
        $(".btnDelAllSubject").click(function () {
            var result = confirm("입력하신 성적을 모두 지우시겠습니까?");
            if(result){
	            var section = $(this).data('section');
                $("#"+section).find('tbody').empty();
            }
        });

        // 전공 추가하기
        $(".btnAddSubject").click(function () {
            var section = $(this).data('section');

            var idx = $("#"+section).find('tbody').find('tr').length +1;

            var html = `<tr>
				<td  class="text-center">${idx}</td>
				<td><select name="" class="form-control">
                                        <option class="text-dark" value="">2019</option>
                                        <option class="text-dark" value="">2018</option>
                                        <option class="text-dark" value="">2017</option>
                                    </select></td>
				<td><select name="" class="form-control">
                                        <option class="text-dark" value="">1</option>
                                        <option class="text-dark" value="">2</option>
                                        <option class="text-dark" value="">여름계절</option>
                                        <option class="text-dark" value="">겨울계절</option>
                                    </select></td>
				<td><select name="" class="form-control">
                                        <option class="text-dark" value="">전공</option>
                                        <option class="text-dark" value="">전공필수</option>
                                        <option class="text-dark" value="">교양필수</option>
                                        <option class="text-dark" value="">교양기타</option>
                                    </select></td>
				<td><select name="" class="form-control">
                                        <option class="text-dark" value="">0</option>
                                        <option class="text-dark" value="">1</option>
                                        <option class="text-dark" value="">2</option>
                                        <option class="text-dark" value="">3</option>
                                    </select></td>
				<td><input type="text" class="form-control"></td>
				<td><select name="" class="form-control">
                                        <option class="text-dark" value="">A+</option>
                                        <option class="text-dark" value="">A0</option>
                                        <option class="text-dark" value="">A-</option>
                                        <option class="text-dark" value="">B+</option>
                                        <option class="text-dark" value="">B0</option>
                                        <option class="text-dark" value="">B-</option>
                                        <option class="text-dark" value="">C+</option>
                                        <option class="text-dark" value="">C0</option>
                                        <option class="text-dark" value="">C-</option>
                                        <option class="text-dark" value="">D+</option>
                                        <option class="text-dark" value="">D0</option>
                                        <option class="text-dark" value="">D-</option>
                                        <option class="text-dark" value="">F</option>
                                        <option class="text-dark" value="">PASS</option>
                                        <option class="text-dark" value="">FAIL</option>
                                    </select></td>
				<td><select name="" class="form-control">
                                        <option class="text-dark" value="">Y</option>
                                        <option class="text-dark" value="">N</option>
                                    </select></td>
				<td>
				    <button type="button" class="btn btn-link btn-sm text-muted btn-delSubject">삭제</button>
				</td>
			</tr>`;

            $("#"+section).find('table>tbody').append(html);

             $(".btn-delSubject").on('click',fn_deleteSubject);
            $(this)[0].scrollIntoView(false);
        });

        $(".btn-delSubject").on('click',fn_deleteSubject);
    });
    // end of function.
    function toggleSide(element) {
        if($(element).data('open')) {
            document.getElementById("mySidenav").style.width = "0";
            $(element).data('open', false);
        }
        else {
            document.getElementById("mySidenav").style.width = "330px";
            $(element).data('open', true);
        }
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }



    function closeAllDialog() {
        console.log(dialogs);
        try {
            $.each( dialogs, function( key, obj ) {
            console.log(obj);
            obj.close();
        });
        }
        catch(error) {
        $.each( dialogs, function( key, obj ) {
            console.log(obj);
            obj.close();
        });
        }

    }
