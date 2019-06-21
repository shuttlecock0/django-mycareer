from django.db import models
from django.conf import settings

# Create your models here.
class Blog(models.Model):
    text = models.TextField()

class TB_BASIC(models.Model):
    user_name = models.TextField()
    en_f_nm = models.TextField()
    en_l_nm = models.TextField()
    ch_nm = models.TextField()
    birth = models.DateTimeField()
    addr = models.TextField()
    phone1 = models.TextField()
    phone2 = models.TextField()
    sex = models.CharField(max_length=2)
    img =  models.ImageField(blank=True)
    email = models.TextField()
    hobby = models.TextField()
    speciality = models.TextField()

    army_yn = models.TextField()
    army_group = models.TextField()
    army_dept = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    army_end_yn = models.TextField()
    army_id = models.TextField()
    army_cert = models.FileField()
    army_etc = models.TextField()
    martial_status = models.TextField()
    attachments = models.FileField()

class TB_EDU_HIGH(models.Model):
    name = models.TextField()
    loc = models.TextField()
    category = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class TB_EDU_UNIV(models.Model):
    name = models.TextField()
    loc = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    day_yn = models.CharField(max_length=10)
    category = models.TextField()
    college = models.TextField()
    transfer_yn = models.TextField()
    major = models.TextField()
    sub_major = models.TextField()
    grade_cert = models.FileField(blank=True)
    graduate_cert = models.FileField(blank=True)
    attachments = models.FileField(blank=True)
    total_score = models.FloatField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class TB_GRADE(models.Model):
    year = models.DateTimeField()
    semester = models.CharField(max_length=10)
    major_yn = models.CharField(max_length=10)
    credit = models.FloatField()
    name = models.TextField()
    grade = models.CharField(max_length=5)
    edu_univ = models.ForeignKey(TB_EDU_UNIV, on_delete=models.CASCADE)


class TB_CAREER(models.Model):
    name = models.TextField()
    dept = models.TextField()
    loc = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    position = models.TextField()
    job = models.TextField()
    salary = models.FloatField()
    tel = models.FloatField()
    email = models.TextField()
    attachment = models.FileField()
    resign = models.FloatField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class TB_CERT(models.Model):
    category = models.IntegerField()
    name = models.FloatField()
    organization = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    score = models.TextField()
    grade = models.TextField()
    cert_num = models.TextField()
    expire_dt = models.DateTimeField()
    cert_copy = models.FileField(blank=True)
    attachments = models.FileField(blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class TB_EDUCATION(models.Model):
    name = models.TextField()
    organization = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    content = models.TextField()
    CERT = models.FileField()
    attachments = models.FileField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class TB_REWARD(models.Model):
    name = models.TextField()
    start = models.DateTimeField()
    content = models.TextField()
    attachments = models.FileField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


class TB_PROJECT(models.Model):
    name = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    organization = models.TextField()
    role = models.TextField()
    summary = models.TextField()
    content = models.TextField()
    attachments = models.FileField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class TB_ETC(models.Model):
    name = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    category = models.TextField()
    content = models.TextField()
    attachments = models.FileField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)