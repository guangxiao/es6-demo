// 清空指定目录文件的任务
import gulp from 'gulp';
// 做删除动作的包
import del from 'del';
import args from './util/args';

gulp.task('clean', () => {
    return del(['server/public', 'server/views'])
})
