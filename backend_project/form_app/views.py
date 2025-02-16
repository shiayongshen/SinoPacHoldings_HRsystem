from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # 為了測試方便，暫時關閉 CSRF 檢查，正式環境建議使用 CSRF Token 或其他驗證機制
def submit_form(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # 這裡可以進行資料驗證、儲存資料庫等處理
            print("收到資料：", data)
            return JsonResponse({'message': 'Data received', 'data': data})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'error': 'Only POST method is allowed.'}, status=405)
