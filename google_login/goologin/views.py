from django.shortcuts import render, redirect
from .models import TB_EDU_HIGH

def index(request):
    return render(request, 'goologin/index.html')

def detail(request):
    tb_edu_highs = TB_EDU_HIGH.objects.all()
    context = { 'tb_edu_highs' : tb_edu_highs, }
    return render(request, 'goologin/detail.html', context)

def create(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        loc = request.POST.get('loc')
        category = request.POST.get('type')
        start = request.POST.get('start')
        end = request.POST.get('end')
        
        edu_high = TB_EDU_HIGH(name=name, loc=loc, category=category, start=start, end=end,)
        edu_high.save()
        return redirect('goologin:detail')
    else:
        return render(request,'goologin/create.html')

def update(request):
    edu_high = TB_EDU_HIGH.objects.all()
    if request.method == 'POST':
        edu_high.name = request.POST.get('name')
        edu_high.loc = request.POST.get('loc')
        edu_high.category = request.POST.get('category')
        edu_high.start = request.POST.get('start')
        edu_high.end = request.POST.get('end')
        edu_high.save()
        return redirect('goologin:detail')
    else:
        context = {'edu_high': edu_high,}
        return render(request, 'goologin/update.html', context)
