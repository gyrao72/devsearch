from django.db.models import fields
from django.forms import ModelForm
from django import forms
from .models import Project,Review


class ProjectForm(ModelForm):
    class Meta:
        model=Project
        fields=['title','description','featured_image','demo_link','source_link','tags']
        widgets={
            'tags':forms.CheckboxSelectMultiple(),
        }


    # Customizing form  
    def __init__(self,*args,**kwargs):
        super(ProjectForm,self).__init__(*args,**kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class': 'input'})




class ReviewForm(ModelForm):
    class Meta:
        model=Review
        fields=['value','body']

        labels={
            'value':'Place your vote',
            'body':'Add a comment'
        }


    # Customizing form  
    def __init__(self,*args,**kwargs):
        super(ReviewForm,self).__init__(*args,**kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class': 'input'})