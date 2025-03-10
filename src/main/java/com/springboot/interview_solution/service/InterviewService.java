package com.springboot.interview_solution.service;
import com.springboot.interview_solution.domain.Question;
import com.springboot.interview_solution.domain.RecordData;
import com.springboot.interview_solution.domain.Report;
import com.springboot.interview_solution.domain.StudentQuestion;
import com.springboot.interview_solution.repository.ReportRepository;
import lombok.AllArgsConstructor;
import org.bytedeco.javacpp.Loader;
import org.opencv.core.Mat;
import org.opencv.core.MatOfRect;
import org.opencv.core.Rect;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;
import org.opencv.objdetect.CascadeClassifier;
import org.opencv.videoio.VideoCapture;
import org.springframework.stereotype.Service;

import javax.sound.sampled.*;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.*;

import static java.lang.System.exit;

@AllArgsConstructor
@Service
public class InterviewService {

    private final ReportRepository reportRepository;

    /* 영상, 음성 녹화 */
    public void recordingVideo(String userID,String reportID,String questionNum, RecordData recordData){
        //60 seconds
        final int RECORD_TIME = 60000;
        String uploadPath = System.getProperty("user.dir")+"/src/main/resources/video/"+userID+"_"+reportID+"_"+questionNum;
        Thread recordThread = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    System.out.println("Start recording...");
                    recordData.start(uploadPath);
                } catch (LineUnavailableException ex) {
                    ex.printStackTrace();
                    exit(-1);
                }
            }
        });

        recordThread.start();

        try {
            Thread.sleep(RECORD_TIME);
        } catch (InterruptedException ex) {
            System.out.println("MY STOPPED");
            ex.printStackTrace();
        }

    }

    /* 영상, 녹화 멈춤 */
    public void stopVideo(String userID,String reportID,String questionNum,RecordData recordData){
        // Insert audio file path (reportID+'_'+question_num)
        String uploadPath = System.getProperty("user.dir")+"/src/main/resources/video/"+userID+"_"+reportID+"_"+questionNum;
        File audioFile = new File(uploadPath+"_audio.wav");
        try {
            recordData.stop();
            recordData.save(audioFile);
            System.out.println("STOPPED");
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        System.out.println("DONE");

    }

    /* 영상, 녹화 파일 하나의 파일로 병합 */
    public void makeFinalVideo(String userID, String reportID, String questionNum,Long executionTime) {
        String resourcePath = System.getProperty("user.dir")+"/src/main/resources/video/";
        String videoPath = resourcePath + userID + "_" + reportID + "_" + questionNum + "_video"  + ".avi";
        String audioPath = resourcePath + userID + "_" + reportID + "_" + questionNum + "_audio" + ".wav";
        String outputPath = resourcePath + userID + "_" + reportID + "_" + questionNum + "_output" + ".mp4";

        String ffmpeg = Loader.load(org.bytedeco.ffmpeg.ffmpeg.class);
        try {
            ProcessBuilder pb = new ProcessBuilder(
                    ffmpeg,
                    "-i",
                    audioPath,
                    "-i",
                    videoPath,
                    "-c:a",
                    "aac",
                    "-c:v",
                    "copy",
                    outputPath
            );
            pb.redirectErrorStream(true);
            Process process = pb.start();
            process.waitFor();
        }catch (IOException | InterruptedException e){
            e.printStackTrace();
        }

        //set Report
        Report report = reportRepository.findById(Long.parseLong(reportID));
        if(questionNum.equals("1")){
            report.setAudio1(audioPath);
            report.setVideo1(userID + "_" + reportID + "_" + questionNum + "_output" + ".mp4");
            report.setSpeed1(executionTime.doubleValue());
        }else if(questionNum.equals("2")){
            report.setAudio2(audioPath);
            report.setVideo2(userID + "_" + reportID + "_" + questionNum + "_output" + ".mp4");
            report.setSpeed2(executionTime.doubleValue());
        }else if(questionNum.equals("3")){
            report.setAudio3(audioPath);
            report.setVideo3(userID + "_" + reportID + "_" + questionNum + "_output" + ".mp4");
            report.setSpeed3(executionTime.doubleValue());
        }
        reportRepository.save(report);

    }

    // select Question before interview
    public List<Question> selectMyQuestion(List<StudentQuestion> questionList, int listSize){
        Random r = new Random();
        int[] overlapNum = new int[3];
        boolean overlap = false;
        ArrayList<Question> interviewQuestions = new ArrayList<Question>();

        for (int i=0;i<listSize;i++){
            overlapNum[i] = r.nextInt(questionList.size());
            for(int j=0;j<i;j++){
                if(overlapNum[i]==overlapNum[j]){
                    overlap = true;
                }
            }
            if(overlap){
                i--;
                overlap = false;
            }else {
                interviewQuestions.add(questionList.get(overlapNum[i]).getQuestion());
            }
        }

        return interviewQuestions;
    }

    /* 면접 질문 3개 랜덤 선택 */
    public List<Question> selectQuestion(List<Question> questionList, int listSize){
        Random r = new Random();
        int[] overlapNum = new int[3];
        boolean overlap = false;
        ArrayList<Question> interviewQuestions = new ArrayList<Question>();

        for (int i=0;i<listSize;i++){
            overlapNum[i] = r.nextInt(questionList.size());
            for(int j=0;j<i;j++){
                if(overlapNum[i]==overlapNum[j]){
                    overlap = true;
                }
            }
            if(overlap){
                i--;
                overlap = false;
            }else {
                interviewQuestions.add(questionList.get(overlapNum[i]));
            }
        }

        return interviewQuestions;
    }
}
