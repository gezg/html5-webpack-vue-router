<template>
    <div>
        <Uploader :options="option1"></Uploader>  
        <Uploader :options="option2" class="jcupload"></Uploader>  
    </div>
</template>

<script>
import Uploader from '@/pages/components/uploader';
/**
 * 文档地址  http://172.16.3.71:8080/gitbucket/gezg/mobileUploader
 */
export default {
    components: {
        Uploader
    },
    data(){
        return {
            option1: {
                formData: {
                    businessId : 1,
                    businessTable : 'table',
                    category: 'category1'
                }
            },
            option2: {
                formData: {
                    businessId : 1,
                    businessTable : 'table',
                    category: 'category2'
                }
            }
        }
    }
}
</script>

<style>
    /**
    * 向下都是可以项目中自定义的样式 ,如无用可删除
    */
    .jcupload .webuploader-pick {
        width: 120px;
        background-color: #f90;
    }

    #target {
        padding: 0;
    }

    #target li {
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #ccc;
        list-style: none;
    }

    #target li img {
        width: 40px;
        height: 40px;
    }
</style>
